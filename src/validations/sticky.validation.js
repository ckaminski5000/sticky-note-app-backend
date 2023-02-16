const Joi = require('joi');
const { password, objectId } = require('./custom.validation');




const createSticky = {
    body: Joi.object().keys({
        user_id: Joi.string().required(),
        title: Joi.string().required(),
        tasks: Joi.array().items(Joi.string()),
    })
}

const getSticky = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    })
};

const updateSticky = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    }),
    body: Joi.object().keys({
        user_id: Joi.string().required(),
        title: Joi.string().required(),
        tasks: Joi.array().items(Joi.string()),
    }).min(1),
}

const deleteSticky = {
    params: Joi.object().keys({
        id: Joi.string().custom(objectId),
    })
};

module.exports = {
    createSticky,
    deleteSticky,
    getSticky,
    updateSticky
}