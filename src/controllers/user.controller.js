
export const getAllUsers = (req,res) => {
    try {
        return res.status(200).json({
            status : true,
            message: "all users.."
        })
    } catch (err) {
        res.status(500).json({
            message: "server error",
            error:err.message
        })
    }
} 