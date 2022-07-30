import mongoose from 'mongoose';

const BulletinSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        article: {
            type: String,
        },
        banner: {
            type: String,
        },
        images: {
            type: Array,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Bulletin ||
    mongoose.model('Bulletin', BulletinSchema);
