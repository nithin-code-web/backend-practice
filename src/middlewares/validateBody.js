export const validateBody = (fields) => {
    return (req,res,next) => {
        if (!req.body) {
            return res.status(400).json({
                status:false,
                message:"empty request body"
            })
        }
        const missing = fields.filter(field => !req.body[field])

        if (missing.length > 0) {
            return res.status(400).json({
                status:false,
                message:`missing required fields: ${missing.join(',')}`
            })
        } 
        next();
    }
}