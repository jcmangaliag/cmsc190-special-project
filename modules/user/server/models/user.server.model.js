import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const nameSchema = mongoose.Schema({
    first: {
        type: String,
        lowercase: true,
        required: true
    },
    mi: {
        type: String,
        lowercase: true,
        required: true
    },
    last: {
        type: String,
        lowercase: true,
        required: true
    }
});

const UserSchema = mongoose.Schema({
    name: { type: [nameSchema] },
    address: String,
    photo: String,
    sex: String,
    group: [],
    dateJoined: {
        type: Date,
        default: Date.now
    },
    birthday: {
        type: Date,
        default: new Date()
    },
    email: {
        type: String,
        unique: true,
        required: true
        // validate, emailValidator
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        match: [/^(09|\+639)[0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.']
    },
    privilege: {
        read: [String],
        write: [String],
        admin: [String]
    }
});


export default mongoose.model('User', UserSchema);
