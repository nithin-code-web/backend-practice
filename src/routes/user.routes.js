import { Router } from 'express'
const router = Router();
import { getAllUsers,createUser,getUserById,deleteUser,updateUser } from '../controllers/user.controller.js'
import { validateBody } from '../middlewares/validateBody.js'
import { createUserSchema,updateUserSchema } from '../schemas/user.schema.js';

router.post('/users',validateBody(createUserSchema),createUser)
router.get('/users',getAllUsers)
// router.get('/users/search')
router.get('/users/:id',getUserById)
router.delete('/users/:id',deleteUser)
// router.put('/users/:id',validateBody(['name','email']),replaceUser)
router.patch('/users/:id',validateBody(updateUserSchema),updateUser)
export default router;