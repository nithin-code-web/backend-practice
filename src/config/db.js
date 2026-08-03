import mongoose from 'mongoose'
import env from './env.js'

const connectDB = async () => {
    const db = await mongoose.connect(env.MONGODB_URI)
    console.log(`MongoDB connected: ${db.connection.host}`)
}

export default connectDB