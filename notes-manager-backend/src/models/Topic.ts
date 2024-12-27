import mongoose, { Document, Schema } from 'mongoose';

export interface ITopic extends Document {
  name: string;
  parentTopic?: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  confidenceScore?: number;
}

const TopicSchema: Schema<ITopic> = new Schema({
  name: { type: String, required: true },
  parentTopic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', default: null },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  confidenceScore: { type: Number, default: null },
});

const Topic = mongoose.model<ITopic>('Topic', TopicSchema);
export default Topic;