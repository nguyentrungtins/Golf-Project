import ProductDetailSection from '../../components/Product/ProductDetailSection.jsx';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';

import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

const getSimilarProducts = async (product = {}) => {
    await dbConnect();
    const options = ['gay-golf', 'gay-golf-nam'];

    const similarProducts = await Product.find({
        'tag.slug': { $in: options },
    });
    return JSON.parse(JSON.stringify(similarProducts));
};

const getAllProducts = async () => {
    await dbConnect();
    const products = await Product.find({});
    return JSON.parse(JSON.stringify(products));
};

const getProductBySlug = async (slug) => {
    await dbConnect();
    const product = await Product.findOne({ slug });
    return JSON.parse(JSON.stringify(product));
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
            props: {},
        };
    }

    try {
        const product = await getProductBySlug(slug);
        if (!product) {
            console.error('>>> Can not find any product with slug provided');
            return {
                props: {},
            };
        }

        const similarProducts = await getSimilarProducts(product);

        return {
            props: {
                product,
                similarProducts: similarProducts,
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error(error);
    }
};

const ProductDetailPage = ({ product = {}, similarProducts = [] }) => {
    return (
        <>
            <ProductDetailSection
                product={product}
                similarProducts={similarProducts}
            />
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
