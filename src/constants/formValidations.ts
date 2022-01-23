import Joi from 'joi';

export const loginFormValidation = {
  id: Joi.string().trim().min(3).required().messages({
    'string.base': `Email or username should be a type of string.`,
    'string.empty': `You shouldn't leave this field empty.`,
    'string.min': `Email or username too small.`,
    'any.required': `Email or username is required.`,
  }),
  password: Joi.string().trim().required().messages({
    'string.base': `Password should be a type of string.'`,
    'string.empty': `You shouldn't leave this field empty.`,
    'any.required': `Password is required.`,
  }),
};

export const registerFormValidation = {
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .max(150)
    .required()
    .messages({
      'string.base': `Email should be a type of string.`,
      'string.empty': `You shouldn't leave this field empty.`,
      'string.email': `Email is not valid.`,
      'string.max': `Email too long!`,
      'any.required': `Email is required.`,
    }),
  username: Joi.string().alphanum().trim().min(3).max(20).required().messages({
    'string.base': `Username should be a type of string.`,
    'string.empty': `You shouldn't leave this field empty.`,
    'string.alphanum': `Username should be alphanumerical.`,
    'string.min': `Username too small.`,
    'string.max': `Username too long!`,
    'any.required': `Username is required.`,
  }),
  password: Joi.string().trim().min(3).required().messages({
    'string.base': `Password should be a type of string.'`,
    'string.empty': `You shouldn't leave this field empty.`,
    'string.min': `Password too weak.`,
    'string.max': `Password too long!`,
    'any.required': `Password is required.`,
  }),
};
