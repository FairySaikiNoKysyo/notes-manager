import express from 'express';
import { tryCatch } from '../middlewares/tryCatchMiddleware';
import { createTopic, getTopics, updateTopic, deleteTopic, moveTopic } from '../controllers/topicController';
import { protect } from '../middlewares/authMiddleware'; 

const router = express.Router();


router.use(protect);


router.post('/', tryCatch(createTopic));


router.get('/', tryCatch(getTopics));


router.put('/:id', tryCatch(updateTopic));


router.delete('/:id', tryCatch(deleteTopic));


router.put('/:id/move', tryCatch(moveTopic));

export default router;
