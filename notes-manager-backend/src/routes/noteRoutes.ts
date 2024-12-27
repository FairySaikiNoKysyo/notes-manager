import express from 'express';
import { tryCatch } from '../middlewares/tryCatchMiddleware';
import { 
  createNote, 
  getNotes, 
  getNoteById, 
  updateNote, 
  deleteNote, 
  moveNote, 
} from '../controllers/noteController'; 

const router = express.Router();


router.post('/', tryCatch(createNote));


router.get('/:topicId', tryCatch(getNotes)); 


router.get('/:topicId/:noteId', tryCatch(getNoteById));


router.put('/:noteId', tryCatch(updateNote));


router.delete('/:noteId', tryCatch(deleteNote));


router.put('/:noteId/move', tryCatch(moveNote));




export default router;
