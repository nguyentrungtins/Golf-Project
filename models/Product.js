import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'Please fill in product name'],
    },
    type: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'Please fill in product type'],
    },
    brand: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'Please fill in product brand'],
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
    img: {
        type: String,
        trim: true,
        default: '',
    },
});

export default mongoose.models.Product ||
    mongoose.model('Product', ProductSchema);
