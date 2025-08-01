import express from 'express';
import { getAllUsers, 
    createUser, 
    updateUser,
     getUserById,
     deleteUser} from '../controllers/userController.js';

const router = express.Router();

// create  new user
router.post('/', createUser);

// read all users
router.get('/', getAllUsers);

// read user by ID
router.get('/:id', getUserById);

// update user by ID
router.put('/:id', updateUser);

// delete user by ID
router.delete('/:id', deleteUser);

export default router;