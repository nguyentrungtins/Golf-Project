import ProductDetailSection from '../../components/Product/ProductDetailSection.jsx';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
// import { getAllProductSlugs } from '../../lib/product-helpers.js';

import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

// const getProductBySlug = async (slug) => {
//     await dbConnect();
//     const product = await Product.findOne({ slug: slug });
//     return JSON.parse(JSON.stringify(product));
// };

const getAllProducts = async () => {
    await dbConnect();
    const products = await Product.find({});
    return JSON.parse(JSON.stringify(products));
};

export async function getStaticPaths() {
    const products = await getAllProducts();
    return {
        paths: products.map((product) => ({
            params: {
                slug: product.slug.toString().trim(),
            },
        })),
        fallback: true,
    };
}
export const getStaticProps = async (context) => {
    const slug = context.params.slug.trim();
    // CHECK SLUG IS UNDEFINED OR NOT
    if (slug === 'undefined' || slug === 'null' || slug === '') {
        // console.log('>>> go here');
        return {
            props: {
                products: [],
            },
        };
    }

    try {
        await dbConnect();

        const result = await Product.findOne({ slug });
        if (!result) {
            console.error('>>> Can not find any product with slug provided');
            return;
        }
        const product = JSON.parse(JSON.stringify(result));
        return {
            props: {
                product,
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error(error);
    }
};

const ProductDetailPage = ({ product = {} }) => {
    return (
        <>
            <ProductDetailSection product={product} />
        </>
    );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout2>{page}</NestedLayout2>
        </Layout>
    );
};
