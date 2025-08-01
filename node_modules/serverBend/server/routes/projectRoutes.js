import express from 'express';
import { getAllprojects, 
    createProject,
    updateProject,
    deleteProject,
    getProjectById} from '../controllers/projectController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// create new project
router.post('/',authMiddleware, createProject);

// read all project
router.get('/', getAllprojects);

// read project by id
router.get('/:id', getProjectById);

// update project by id
router.put('/:id',authMiddleware, updateProject);

// delete project by ID
router.delete('/:id',authMiddleware, deleteProject);

export default router;