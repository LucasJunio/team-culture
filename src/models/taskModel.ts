import * as mongoose from 'mongoose';

export interface ITask extends Document {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

const TaskSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
