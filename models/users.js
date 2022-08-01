import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'Please fill in your email'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        default: '',
        required: [true, 'Password should be longer'],
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
