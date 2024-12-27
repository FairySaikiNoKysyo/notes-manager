import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import topicRoutes from './routes/topicRoutes';
import noteRoutes from './routes/noteRoutes';
import { errorHandler } from './middleware/errorHandler'; 

dotenv.config();

const app = express();


app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/notes', noteRoutes);


app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
