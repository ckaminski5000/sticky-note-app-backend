const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stickyService } = require('../services');

const createSticky = catchAsync(async (req, res) => {
  const sticky = await stickyService.createSticky(req.body);
  res.status(httpStatus.CREATED).send(sticky);
});

const getSticky = catchAsync(async (req, res) => {
  const sticky = await stickyService.getStickyById(req.params.id);
  if (!sticky) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Sticky not found');
  }
  res.send(sticky);
});

const getStickiesbyUser = catchAsync(async (req, res) => {
  const stickies = await stickyService.getStickiesbyUserId(req.params.User_id);
  if (!stickies) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No Stickies were found');
  }
  res.send(stickies);
});

const updateSticky = catchAsync(async (req, res) => {
  const sticky = await stickyService.updateStickyById(req.params.id, req.body);
  res.send(sticky);
});

const deleteSticky = catchAsync(async (req, res) => {
  await stickyService.deleteStickyById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSticky,
  deleteSticky,
  updateSticky,
  getSticky,
  getStickiesbyUser,
};
