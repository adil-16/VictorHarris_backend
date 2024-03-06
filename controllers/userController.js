const path = require("path");

const ErrorHandler = require("../utils/errorHandler");

const User = require("../models/userModel");

const sendToken = require("../utils/jwtToken");

const sendEmail = require("../utils/sendEmail");

const crypto = require("crypto");

const renderEmailTemplate = require("../utils/emailTemplate");

const { generateOTP } = require("../utils/otpGenerator");

const NodeCache = require("node-cache");

const nodeCache = new NodeCache();
//register

const registerUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    console.log(email);

    const emailAlreadyPresent = await User.findOne({ email });

    if (emailAlreadyPresent) {
      return next(new ErrorHandler("Email Already Exists", 409));
    }

    const otp = generateOTP();

    const otpData = {
      otp: otp,
    };

    const templatePath = path.join(
      __dirname,
      "..",
      "public",
      "views",
      "templates",
      "otpTemplate.html"
    );

    const emailContent = renderEmailTemplate(templatePath, otpData);

    try {
      await sendEmail({
        email: email,
        subject: "Victor Harris OTP",
        html: emailContent,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }

    res
      .status(200)
      .json({ message: "OTP sent to your email, please verify", otp });
  } catch (error) {
    console.log(error);
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    console.log(req.body.user);

    const { user } = req.body;

    if (user) {
      const newUser = await User.create(user);
      nodeCache.del("profile");
      nodeCache.del("users");
      nodeCache.del("user");
      sendToken(newUser, 201, res);
    } else {
      return next(new ErrorHandler("Invalid OTP", 400));
    }
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 400));
  }
};

//login
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorHandler("Please Enter Email and Password"));
    }
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    nodeCache.del("profile");
    nodeCache.del("users");
    nodeCache.del("user");
    sendToken(user, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error, 404));
  }
};

//for oneself
const getUserDetails = async (req, res, next) => {
  try {
    let user;
    if (nodeCache.has("profile")) {
      user = JSON.parse(nodeCache.get("profile"));
    } else {
      user = await User.findById(req.user.id);
      nodeCache.set("profile", JSON.stringify(user));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

//get all users (for admin)
const getAllUsers = async (req, res, next) => {
  try {
    let users;
    if (nodeCache.has("users")) {
      users = JSON.parse(nodeCache.get("users"));
    } else {
      users = await User.find({ role: { $ne: "admin" } });
      nodeCache.set("users", JSON.stringify(users));
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

//get a single user (for admin)
const getSingleUser = async (req, res, next) => {
  try {
    let user;
    if (nodeCache.has("user")) {
      user = JSON.parse(nodeCache.get("user"));
    } else {
      user = await User.findById(req.params.id);
      nodeCache.set("user", JSON.stringify(user));
    }
    if (!user) {
      return next(
        new ErrorHandler(`User Doesn't Exist with Id: ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return next(new ErrorHandler(error.message, 400));
  }
};

//update user role (for admin)
const updateUserRole = async (req, res, next) => {
  try {
    const newUserData = {
      role: req.body.role,
    };

    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return next(new ErrorHandler("User Does not Exist with this id ", 404));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    console.log(err.message);
    return next(new ErrorHandler(err.message, 500));
  }
};

//delete user (for admin)
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(new ErrorHandler("User Does not Exist with this id ", 404));
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (err) {
    return next(new ErrorHandler(err.message, 500));
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    console.log(req.body.email);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(new ErrorHandler("User Not Found", 404));
    }
    const resetToken = await user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${process.env.RESET_TOKEN_URL}/${resetToken}`;

    const emailData = {
      resetPasswordUrl: resetPasswordUrl,
    };

    const templatePath = path.join(
      __dirname,
      "..",
      "public",
      "views",
      "templates",
      "resetPasswordTemplate.html"
    );
    const emailContent = renderEmailTemplate(templatePath, emailData);

    try {
      await sendEmail({
        email: req.body.email,
        subject: "Victor Harris Password Recovery",
        html: emailContent,
      });

      res.status(200).json({
        success: true,
        message: `Email Sent to ${req.body.email}`,
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    console.log(error.message);
    return next(new ErrorHandler(error.message, 404));
  }
};

const resetPassword = async (req, res, next) => {
  try {
    const resetPasswordToken = req.params.resetId;

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorHandler("Token expired or invalid", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error.message);
    return next(new ErrorHandler(error.message, 500));
  }
};

const updateProfile = async (req, res, next) => {
  try {
    const newUserData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
    };

    // const profile =
    //   req.files?.profilePhotoUrl?.length > 0
    //     ? `/${req.files?.profilePhotoUrl[0]?.filename}`
    //     : "";

    // req.body.image = profile;

    await User.findByIdAndUpdate(req.user.id, newUserData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    nodeCache.del("users");
    nodeCache.del("user");
    nodeCache.del("profile");

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

const updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    if (!isPasswordMatched) {
      return next(new ErrorHandler("Old password is incorrect", 400));
    } else if (req.body.newPassword === req.body.oldPassword) {
      return next(new ErrorHandler("New Password Can't be Old Password", 409));
    } else if (req.body.newPassword !== req.body.confirmPassword) {
      return next(new ErrorHandler("password does not match", 400));
    }

    user.password = req.body.newPassword;

    await user.save();

    sendToken(user, 200, res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};

module.exports = {
  registerUser,
  loginUser,
  verifyOTP,
  getUserDetails,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
  forgotPassword,
  resetPassword,
  updateProfile,
  updatePassword,
};
