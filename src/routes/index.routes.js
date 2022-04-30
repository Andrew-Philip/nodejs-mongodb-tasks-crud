import { Router } from 'express';
import { viewTasks, createTask, updateTask, deleteTask, postUpdatedTask, taskIsDone } from '../controllers/taskControllers';


const router = Router();

router.get('/', viewTasks);

router.post('/tasks/add', createTask);

router.get('/task/:id/edit', updateTask);

router.post('/task/:id/edit', postUpdatedTask);

router.get('/delete/:id', deleteTask);

router.get('/toggleDone/:id', taskIsDone);

export default router;