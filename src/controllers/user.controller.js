export const createUser = (req,res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ 
                status: false,
                message: "request body is empty"
            })
        }
        const { name,email } = req.body;
        if ( !name || !email) {
            return res.status(400).json({ 
                status: false,
                message:"name and email are required"
            })
        }
        return res.status(201).json({
            status: true,
            message:"user created successfully",
            data: {name,email}
        })

    } catch (error) {
        res.status(500).json({
            message:"server error",
            error: error.message
        })
    }
}

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

export const getUserById = (req,res) => {
    try {
        const { id } = req.params

        if (isNaN(parseInt(id)) || parseInt(id) < 0) {
            return res.status(400).json({
                status : false,
                message: "invalid id"
            })
        }
        return res.status(200).json({
            status : true,
            message : "user fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            message:"server error",
            error: error.message
        })
    }
}

export const searchUsers = (req,res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({
                status:false,
                message:"name query is required"
            })
        }
        return res.status(200).json({
            status : true,
            message: `search results for ${name}`
        })
    } catch (error) {
        res.status(500).json({
            message:"server error",
            error: error.message
        })
    }
}