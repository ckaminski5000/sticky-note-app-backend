const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const stickyController = require('../../controllers/sticky.controller');
const stickyValidation = require('../../validations/sticky.validation');

const router = express.Router();

router.route('/')
    .post(auth('createSticky'), validate(stickyValidation.createSticky), stickyController.createSticky);



module.exports = router;