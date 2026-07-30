import { Router } from 'express'
const router = Router();
import { getAllUsers,createUser,getUserById,searchUsers,deleteUser,replaceUser,updateUser } from '../controllers/user.controller.js'
import { validateBody } from '../middlewares/validateBody.js'

router.post('/users',validateBody(['name','email']),createUser)
router.get('/users',getAllUsers)
router.get('/users/search',searchUsers)
router.get('/users/:id',getUserById)
router.delete('/users/:id',deleteUser)
router.put('/users/:id',validateBody(['name','email']),replaceUser)
router.patch('/users/:id',updateUser)
export default router;