import mongoose from 'mongoose';

const BulletinSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        article: {
            type: String,
            trim: true,
        },
        banner: {
            type: Object,
        },
        images: {
            type: Array,
        },
        slug: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Bulletin ||
    mongoose.model('Bulletin', BulletinSchema);
