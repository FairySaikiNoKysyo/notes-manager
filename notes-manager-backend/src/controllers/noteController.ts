import { Request, Response } from 'express';
import Note from '../models/Note';
import { AuthRequest } from '../global';
import { tryCatch } from '../middlewares/tryCatchMiddleware'; 


export const createNote = tryCatch(async (req: AuthRequest, res: Response) => {
  const { topicId, content } = req.body;
  const userId = req.user.id;

  const newNote = new Note({
    topic: topicId,
    user: userId,
    content,
  });

  await newNote.save();

  res.status(201).json({ success: true, note: newNote });
});


export const getNotes = tryCatch(async (req: Request, res: Response) => {
  const { topicId } = req.params;
  const notes = await Note.find({ topic: topicId }).populate('user', 'username');
  res.status(200).json({ success: true, notes });
});


export const getNoteById = tryCatch(async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const note = await Note.findById(noteId).populate('user', 'username');

  if (!note) {
    return res.status(404).json({ success: false, message: 'Note not found' });
  }

  res.status(200).json({ success: true, note });
});


export const updateNote = tryCatch(async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const { content } = req.body;

  const updatedNote = await Note.findByIdAndUpdate(noteId, { content }, { new: true });

  if (!updatedNote) {
    return res.status(404).json({ success: false, message: 'Note not found' });
  }

  res.status(200).json({ success: true, note: updatedNote });
});


export const deleteNote = tryCatch(async (req: Request, res: Response) => {
  const { noteId } = req.params;

  const deletedNote = await Note.findByIdAndDelete(noteId);

  if (!deletedNote) {
    return res.status(404).json({ success: false, message: 'Note not found' });
  }

  res.status(200).json({ success: true, message: 'Note deleted' });
});


export const moveNote = tryCatch(async (req: Request, res: Response) => {
  const { noteId } = req.params;
  const { newTopicId } = req.body;

  const note = await Note.findByIdAndUpdate(noteId, { topic: newTopicId }, { new: true });

  if (!note) {
    return res.status(404).json({ success: false, message: 'Note not found' });
  }

  res.status(200).json({ success: true, note });
});


