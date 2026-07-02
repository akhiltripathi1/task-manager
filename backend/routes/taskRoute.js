import express from 'express';
import {
  createTask,
  fetchAllTask,
  updateTaskById,
  deleteTaskById,
} from '../controllers/taskController.js';

const router = express.Router();

//to get all the tasks
router.get('/', fetchAllTask);

//to create a task
router.post('/', createTask);

//to update a task
router.put('/:id', updateTaskById);

//to delete a task
router.delete('/:id', deleteTaskById);
export default router;
