import { body, validationResult } from "express-validator";

export const handlerInputErrors = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return
    }else{
    next()
    }
}