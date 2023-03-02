import { body, validationResult } from "express-validator";

export const storeProductValidation = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ errors: errors.array() });
    }else{
    next()
    }
}

export const updateProductValidation = (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ errors: errors.array() });
    }else{
    next()
    }
}