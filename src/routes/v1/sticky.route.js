const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const stickyController = require('../../controllers/sticky.controller');
const stickyValidation = require('../../validations/sticky.validation');

const router = express.Router();
// need to create a get, update and delete

router.route('/')
    .post(auth('createSticky'), validate(stickyValidation.createSticky), stickyController.createSticky);

router.route('/:id')
    .get(validate(stickyValidation.getSticky), stickyController.getSticky)
    .put(validate(stickyValidation.updateSticky), stickyController.updateSticky)
    .delete(validate(stickyValidation.deleteSticky), stickyController.deleteSticky);

router.route('/all/:User_id')
    .get(validate(stickyValidation.getStickies), stickyController.getStickiesbyUser);


module.exports = router;