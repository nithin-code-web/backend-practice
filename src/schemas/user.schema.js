import {z} from 'zod';

export const createUserSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum(['user', 'admin'], { message: "Role must be either 'user' or 'admin'" }).optional()
})

export const updateUserSchema = createUserSchema.partial() //makes all fields optional for patch requests