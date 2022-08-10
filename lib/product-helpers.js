import dbConnect from './dbConnect';
import Product from '../models/Product';

export async function getProductBySlug(slug) {
    try {
        await dbConnect();

        const product = await Product.findOne({ slug: slug });
        if (!product) {
            console.error('>>> Can not find any product with slug provided');
            return;
        }
        return JSON.stringify(bulletin);
    } catch (error) {
        console.error(error);
    }
}

export async function getAllProductSlugs() {
    try {
        await dbConnect();
        const slugs = await Product.find({});

        if (!slugs) {
            console.error('>>> Can not find any slug');
            return;
        }
        return JSON.stringify(slugs);
    } catch (error) {
        console.error(error);
    }
}
