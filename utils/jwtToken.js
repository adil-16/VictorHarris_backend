const sendToken = async (user, statusCode, res) => {
  const token = await user.getJWTToken();

  user.password = null;

  res.status(statusCode).json({
    success: true,
    message: "Welcome Back",
    user,
    token,
  });
};

module.exports = sendToken;
