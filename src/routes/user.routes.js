import { Router } from 'express'
const router = Router();
import { getAllUsers } from '../controllers/user.controller.js'

router.get('/users',getAllUsers)

export default router;