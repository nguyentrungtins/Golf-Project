import { useRouter } from 'next/router';
import ListProductSection from '../../../components/Product/ListProductSection';
import NestedLayout2 from '../../../components/Layouts/NestedLayout2';
import Layout from '../../../components/Layouts/Layout';
import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

const getProductsBySlug = async (slug) => {
    await dbConnect();
    const products = await Product.find({ 'tag.slug': slug });
    return JSON.parse(JSON.stringify(products));
};

export const getStaticPaths = () => {
    const slugs = [
        'gay-golf-nam',
        'gay-golf-nu',
        'gay-golf',
        'ao-golf-nam',
        'ao-golf-nu',
        'quan-golf-nam',
        'quan-golf-nu',
        'vay-golf-nu',
        'thoi-trang',
        'giay-golf-nam',
        'giay-golf-nu',
        'giay-golf',
        'gang-tay-golf',
        'du-golf',
        'vo-golf',
        'phu-kien-golf',
        'may-3d-golf',
        'cigar',
        'ruou-vang',
        'khac',
    ];
    return {
        paths: slugs.map((slug) => ({
            params: {
                slug,
            },
        })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const slug = context.params.slug;

    // CHECK SLUG IS UNDEFINED OR NOT
    if (slug === 'undefined' || slug === 'null') {
        // console.log('>>> go here');
        return {
            props: {
                products: {},
            },
        };
    }

    const products = await getProductsBySlug(slug.trim());
    return {
        props: {
            products: products.sort(
                (a, b) =>
                    Number(new Date(b.updatedAt)) -
                    Number(new Date(a.updatedAt))
            ),
        },
    };
};

const ProductsByTagPage = ({ products = {} }) => {
    return (
        <>
            <ListProductSection products={products} useSlug />
        </>
    );
};

export default ProductsByTagPage;

ProductsByTagPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout2>{page}</NestedLayout2>
        </Layout>
    );
};
