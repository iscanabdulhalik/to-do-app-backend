import express from 'express';
import TodoApp from './TodoApp.js';

const router = express.Router();

router.use('/', TodoApp);

export default router;
