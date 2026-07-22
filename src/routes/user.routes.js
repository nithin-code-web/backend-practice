import { Router } from 'express'
const router = Router();
import { getAllUsers } from '../controllers/user.controller.js'

router.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message: "server is running.."
    })
})

router.get('/users',getAllUsers)

export default router;