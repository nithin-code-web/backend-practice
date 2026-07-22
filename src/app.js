import express from "express";
import 'dotenv/config.js'

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message: "server is running.."
    })
})

const PORT = process.env.PORT

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})