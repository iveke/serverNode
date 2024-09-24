import HttpError from "../helpers/HttpError.js";

const isEmptyBody = (req, res, next)=> {
    const keys = Object.keys(req.body);

    if(!keys.length){
        return next(HttpError(400, "Request body is required"))
    }
    next();
}

export default isEmptyBody;