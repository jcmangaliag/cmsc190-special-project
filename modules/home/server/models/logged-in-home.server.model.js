import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const Todo = mongoose.model('Todo', {
	task: String,
	isCompleted: Boolean,
	isEditing: Boolean
});

export default Todo;
