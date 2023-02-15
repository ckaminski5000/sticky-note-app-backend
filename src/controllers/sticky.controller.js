const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stickyService } = require('../services');

const createSticky = catchAsync(async (req, res) => {
    const sticky = await stickyService.createSticky(req.body);
    res.status(httpStatus.CREATED).send(sticky);
  });


  module.exports = {
    createSticky
  }