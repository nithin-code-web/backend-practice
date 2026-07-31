const errHandler = (err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error"

    res.status(statusCode).json({
        status:false,
        message,
        ...(process.env.NODE_ENV === "development" && {stack:err.stack})
    })
}

export default errHandler;