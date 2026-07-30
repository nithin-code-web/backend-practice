export const createUser = (req,res) => {
    try {
        const { name,email } = req.body;
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

export const replaceUser = (req,res) => {
    try{
        const { id } = req.params

        if (isNaN(parseInt(id)) || parseInt(id) < 0) {
            return res.status(400).json({
                status:false,
                message:"invalid id"
            })
        }

        const { name,email } = req.body

        return res.status(200).json({
            status:true,
            message:"user replaced successfully",
            data:{id,name,email}
        })

    } catch(error) {
        res.status(500).json({
            message:"server error",
            error:error.message
        })
    }
}

export const updateUser = (req,res) => {
    try{
        const { id } = req.params

        if (isNaN(parseInt(id)) || parseInt(id) < 0) {
            return res.status(400).json({
                status:false,
                message:"invalid id"
            })
        }

        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status:false,
                message:"no fields to update"
            })
        }

        const { name,email } = req.body

        const updates = {}
        if (name) updates.name = name;
        if (email) updates.email = email;

        return res.status(200).json({
            status:true,
            message:"user updated successfully",
            data:{id,...updates}
        })

    } catch(error) {
        res.status(500).json({
            message:"server error",
            error:error.message
        })
    }

}

export const deleteUser = (req,res) => {
    try{
        const { id } = req.params

        if (isNaN(parseInt(id)) || parseInt(id) < 0) {
            return res.status(400).json({
                status:false,
                message:"invalid id"
            })
        }

        return res.status(200).json({
            status:true,
            message:"user deleted successfully"
        })

    } catch(error) {
        res.status(500).json({
            message:"server error",
            error:error.message
        })
    }
}