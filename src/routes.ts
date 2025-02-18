import { Router } from 'express';
import {
  createTask,
  deleteTask,
  readTask,
  updateTask,
} from './controllers/taskController';
import {
  createTaskValidation,
  deleteTaskValidation,
  updateTaskValidation,
} from './validators/TaskValidation';

const router = Router();

router.get('/', readTask);
router.post('/', createTaskValidation, createTask);
router.put('/:id', updateTaskValidation, updateTask);
router.delete('/:id', deleteTaskValidation, deleteTask);

export default router;
