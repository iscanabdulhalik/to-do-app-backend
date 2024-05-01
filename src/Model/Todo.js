import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name : {type: String, required: true},
    description: {type: String, required: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    isCompleted: {type: Boolean, default: false},
    isActive: {type: Boolean, default: true}
});

const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;
