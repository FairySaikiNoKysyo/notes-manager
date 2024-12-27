import { Request, Response } from 'express';
import { AuthRequest } from '../global';
import Topic from '../models/Topic';

export const createTopic = async (req: AuthRequest, res: Response) => {
  const { name, parentTopic } = req.body;
  const userId = req.user.id;

  const topic = await Topic.create({
    name,
    parentTopic,
    user: userId,
  });

  res.status(201).json({ success: true, topic });
};

export const getTopics = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;
  const topics = await Topic.find({ user: userId });

  res.status(200).json({ success: true, topics });
};

export const updateTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, parentTopic } = req.body;

  const topic = await Topic.findByIdAndUpdate(id, { name, parentTopic }, { new: true });

  if (!topic) {
    return res.status(404).json({ success: false, message: 'Topic not found' });
  }

  res.status(200).json({ success: true, topic });
};

export const deleteTopic = async (req: Request, res: Response) => {
  const { id } = req.params;

  const topic = await Topic.findByIdAndDelete(id);

  if (!topic) {
    return res.status(404).json({ success: false, message: 'Topic not found' });
  }

  res.status(200).json({ success: true, message: 'Topic deleted' });
};

export const moveTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { newParentTopicId } = req.body;

  const topic = await Topic.findByIdAndUpdate(id, { parentTopic: newParentTopicId }, { new: true });

  if (!topic) {
    return res.status(404).json({ success: false, message: 'Topic not found' });
  }

  res.status(200).json({ success: true, topic });
};
