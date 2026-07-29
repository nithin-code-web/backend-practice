import { Router } from 'express'
const router = Router();
import { getAllUsers,createUser,getUserById,searchUsers } from '../controllers/user.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

router.post('/users',validateBody(['name','email']),createUser)
router.get('/users',getAllUsers)
router.get('/users/search',searchUsers)
router.get('/users/:id',getUserById)

export default router;