const sendToken = async (user, statusCode, res) => {
  const token = await user.getJWTToken();

  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
