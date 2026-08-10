import AppError from "../utils/AppError.js"
import { ZodError } from "zod";

export const validateBody = (schema) => {
    return (req,res,next) => {
        try {
            req.body = schema.parse(req.body)
            next()
        } catch (error) {
            if (error instanceof ZodError) {
                // map over error.issues directly
                const message = error.issues.map((err) => `${err.path.join('.')} : ${err.message}`).join(', ')
                return next(new AppError(message, 400))
            } 
            next(error)
        }
    }
}