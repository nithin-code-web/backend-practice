import env from '../config/env.js'

const apikeyAuth = (req,res,next) => {
    const apiKey = req.headers["x-api-key"]

    if (!apiKey || apiKey !== env.API_KEY) {
        return res.status(401).json({
            status:false,
            message:"Invalid or missing API Key"
        })
    }
    next();
}

export default apikeyAuth