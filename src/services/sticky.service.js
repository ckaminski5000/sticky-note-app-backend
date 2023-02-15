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



  module.exports = {
    createSticky
  }