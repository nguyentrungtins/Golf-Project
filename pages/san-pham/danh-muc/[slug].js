import { useRouter } from 'next/router';
import ListProductSection from '../../../components/Product/ListProductSection';
import NestedLayout2 from '../../../components/Layouts/NestedLayout2';
import Layout from '../../../components/Layouts/Layout';
import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

const tags = [
    {
        name: 'Gậy golf nam',
        slug: 'gay-golf-nam',
    },
    {
        name: 'Gậy golf nữ',
        slug: 'gay-golf-nu',
    },
    {
        name: 'Gậy golf',
        slug: 'gay-golf',
    },
    {
        name: 'Áo golf nam',
        slug: 'ao-golf-nam',
    },
    {
        name: 'Áo golf nữ',
        slug: 'ao-golf-nu',
    },
    {
        name: 'Quần golf nam',
        slug: 'quan-golf-nam',
    },
    {
        name: 'Quần golf nữ',
        slug: 'quan-golf-nu',
    },
    {
        name: 'Váy golf nữ',
        slug: 'vay-golf-nu',
    },
    {
        name: 'Thời trang',
        slug: 'thoi-trang',
    },
    {
        name: 'Giày golf nam',
        slug: 'giay-golf-nam',
    },
    {
        name: 'Giày golf nữ',
        slug: 'giay-golf-nu',
    },
    {
        name: 'Giày golf',
        slug: 'giay-golf',
    },
    {
        name: 'Găng tay golf',
        slug: 'gang-tay-golf',
    },
    {
        name: 'Dù golf',
        slug: 'du-golf',
    },
    {
        name: 'Vớ golf',
        slug: 'vo-golf',
    },
    {
        name: 'Phụ kiện golf',
        slug: 'phu-kien-golf',
    },
    {
        name: 'Máy 3d golf',
        slug: 'may-3d-golf',
    },
    {
        name: 'cigar',
        slug: 'cigar',
    },
    {
        name: 'Rượu vang',
        slug: 'ruou-vang',
    },
    {
        name: 'Khác',
        slug: 'khac',
    },
];

const getProductsBySlug = async (slug) => {
    await dbConnect();
    const products = await Product.find({ 'tag.slug': slug });
    return JSON.parse(JSON.stringify(products));
};

export const getStaticPaths = () => {
    return {
        paths: tags.map((tag) => ({
            params: {
                slug: tag.slug,
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
            slug,
        },
    };
};

const ProductsByTagPage = ({ products = {}, slug = '' }) => {
    const currentTag = tags.find((tag) => tag.slug === slug);

    return (
        <>
            <ListProductSection
                products={products}
                title={currentTag.name}
                useSlug
            />
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
