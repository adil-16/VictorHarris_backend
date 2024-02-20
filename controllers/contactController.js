const ErrorHandler = require("../utils/errorHandler");

const ContactUs = require("../models/contactUsModel");

const postContact = async (req, res, next) => {
  try {
    await ContactUs.create(req.body);
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 404));
  }
};

const getSingleContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await ContactUs.findById(id);
    res.status(200).json({
      success: true,
      contact,
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
