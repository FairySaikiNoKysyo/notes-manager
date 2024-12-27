import mongoose, { Document, Schema } from 'mongoose';

export interface INote extends Document {
  title: string;
  content?: string;
  topic: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
}

const NoteSchema: Schema<INote> = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Note = mongoose.model<INote>('Note', NoteSchema);
export default Note;