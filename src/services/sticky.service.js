const httpStatus = require('http-status');
const { Sticky } = require('../models');
const ApiError = require('../utils/ApiError');


/**
 * Create a Sticky
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createSticky = async (stickyBody) => {
    return Sticky.create(stickyBody);
  };

  const getStickyById = async (stickyId) => {
    return Sticky.findById(stickyId);
}

const updateStickyById = async(stickyId, updateBody) => {
    const sticky = await getStickyById(stickyId);
    if(!sticky) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sticky not found');
    }
    Object.assign(sticky, updateBody);
    await sticky.save();
    return sticky;
}

const deleteStickyById = async(stickyId) => {
    const sticky = await getStickyById(stickyId);
    if(!sticky) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Sticky not found');
    }
    await sticky.remove();
    return sticky;
}





  module.exports = {
    createSticky,
    deleteStickyById,
    getStickyById,
    updateStickyById,
  }