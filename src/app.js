import express from "express";
const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message: "server is running.."
    })
})

const PORT = 3000

app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}`)
})