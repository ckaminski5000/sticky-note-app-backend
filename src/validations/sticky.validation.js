const Joi = require('joi');
const { password, objectId } = require('./custom.validation');




const createSticky = {
    body: Joi.object().keys({
        user_id: Joi.string().required(),
        title: Joi.string().required(),
        tasks: Joi.array().items(Joi.string()),
    })
}


module.exports = {
    createSticky
}