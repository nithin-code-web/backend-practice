import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";
import User from "../models/user.model.js"

export const createUser = asyncHandler( async (req,res) => {
        const { name,email,password } = req.body;
        const user = await User.create({ name, email, password })
        return res.status(201).json({
            status: true,
            message:"user created successfully",
            data: user
        })
})
    
export const getAllUsers = asyncHandler( async(req,res) => {
    const users = await User.find().select('-password')
    res.status(200).json({
        status:true,
        count:users.length,
        data:users
    })
})

export const getUserById =asyncHandler(async (req,res) => {
        const user = await User.findById(req.params.id)
        if (!user) throw new AppError("user not found",404)
        return res.status(200).json({
            status : true,
            message : "user fetched successfully",
            data: user
        })
})

export const updateUser = asyncHandler( async(req,res) => {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true , runValidators: true }
        )
        if (!user) throw new AppError("User not found",404)
        return res.status(200).json({
            status:true,
            message:"user updated successfully",
            data:user
        })

})

export const deleteUser = asyncHandler( async(req,res) => {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) throw new AppError("User not found",404)
        return res.status(200).json({
            status:true,
            message:"user deleted successfully"
        })
})