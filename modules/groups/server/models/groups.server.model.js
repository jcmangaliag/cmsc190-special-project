import mongoose from 'mongoose';

const GroupSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    status: {
        type: String,
        default: 'Unregistered'
    },
    description: String,
    photo: String,
    accessibility: String,
    membership: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});



export default mongoose.model('Group', GroupSchema);
