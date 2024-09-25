import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error.message);
      return next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

export default validateBody;
