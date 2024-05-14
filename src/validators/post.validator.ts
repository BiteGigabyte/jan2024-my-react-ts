import Joi from "joi";

export const postValidator =
    Joi
        .object({
            userId: Joi
                .number()
                .min(0).max(100)
                .required()
                .messages({
                    'number.min': 'min 1',
                    'number.max': 'max 100'
                }),
            title: Joi.string()
                .pattern(/\w{4,}/)
                .required()
                .messages({
                    "string.pattern.base": "only words accepted",
                    "string.required.base": "username is required",
                }),
            body: Joi.string().required()
})