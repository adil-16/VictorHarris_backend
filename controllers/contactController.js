const path = require("path");

const ErrorHandler = require("../utils/errorHandler");

const ContactUs = require("../models/contactUsModel");

const renderEmailTemplate = require("../utils/emailTemplate");

const sendEmail = require("../utils/sendEmail");

const postContact = async (req, res, next) => {
  try {
    const { name, message } = req.body;
    const contactEmail = req.body.email;
    await ContactUs.create({ name, message, contactEmail });
    const userMessage = {
      message: req.body.message,
    };

    const templatePath = path.join(
      __dirname,
      "..",
      "public",
      "views",
      "templates",
      "messageReceivedTemplate.html"
    );
    const emailContent = renderEmailTemplate(templatePath, userMessage);

    try {
      await sendEmail({
        email: req.body.email,
        subject: "We Have Received Your Message!",
        html: emailContent,
      });
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
    res.status(200).json({
      success: true,
      message: "You will get a response shortly",
    });
  } catch (error) {
    console.log(error);
    return next(new ErrorHandler(error.message, 404));
  }
};

const getSingleContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await ContactUs.findById(id);
    if (contact) {
      res.status(200).json({
        success: true,
        contact,
      });
    }
    res.status(404).json({
      success: false,
      message: "Contact Not Found",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getAllContacts = async (req, res, next) => {
  try {
    const contact = await ContactUs.find();
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await ContactUs.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "contact deleted successfully",
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

module.exports = {
  postContact,
  getSingleContact,
  getAllContacts,
  deleteContact,
};
