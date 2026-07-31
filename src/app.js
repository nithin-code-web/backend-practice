import express from "express";
import userRoutes from "./routes/user.routes.js";
import logger from "./middlewares/logger.js";
import apikeyAuth from "./middlewares/apiKeyAuth.js"
import errHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(logger)


app.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message: "server is running.."
    })
})

app.use('/api/v1',apikeyAuth,userRoutes)

app.use(errHandler);

export default app;