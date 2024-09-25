import Joi from "joi";

export const addPostSchema = Joi.object({
  title: Joi.string().required().min(1).messages({
    "string.base": "Title is not string",
    "string.required": "Title is required",
    "string.min": "Too Shortly!",
  }),
  description: Joi.string().required().min(1).messages({
    "string.base": "Description is not string",
    "string.required": "Description is required!",
    "string.min": "Too Shortly!",
  }),
  level: Joi.string().required().messages({
    "string.base": "Level is string",
    "string.required": "Level is required!",
  }),
});

export const editPostSchema = Joi.object({
  title: Joi.string().messages({ "string.base": "Title is not string" }),
  description: Joi.string().messages({
    "strign.base": "Body is not string",
  }),
  level: Joi.string().messages({
    "string.base": "Level is string",
  }),
});
