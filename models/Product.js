import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            default: '',
            required: [true, 'Please fill in product name'],
        },
        tag: {
            type: Array,
            default: '',
        },
        brand: {
            type: String,
            trim: true,
            default: '',
            required: [true, 'Please fill in product brand'],
        },
        price: {
            type: Object,
        },
        desc: {
            type: String,
            trim: true,
            default: '',
        },
        descImg: {
            type: Array,
            default: '',
        },
        techParameter: {
            type: Array,
            default: '',
        },
        mainImg: {
            type: Object,
        },
        img: {
            type: Array,
        },
        status: {
            type: Number,
            default: 1,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Product ||
    mongoose.model('Product', ProductSchema);
