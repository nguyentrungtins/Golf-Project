import { useRouter } from 'next/router';
import ListProductSection from '../../components/Product/ListProductSection';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
import dbConnect from '../../lib/dbConnect';
import Product from '../../models/Product';

const getAllProducts = async (tag) => {
    await dbConnect();
    const products = await Product.find();
    return JSON.parse(JSON.stringify(products));
};

export const getStaticProps = async (context) => {
    // console.log('>>> Context: ', context.query);
    const products = await getAllProducts('gay-golf-nu');
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

const ProductPage = ({ products = {} }) => {
    const router = useRouter();
    const { tag } = router.query;
    return (
        <>
            {/* ĐỐI VỚI TRANG USER THÌ DÙNG SLUG, ADMIN THÌ ID CHO ĐƠN GIẢN */}
            {/* NHƯ VẬY BÊN TRANG ADMIN MUỐN DÙNG ListProductSection COMPONENT THÌ KO TRUYỀN PROP useSlug */}
            <ListProductSection products={products} useSlug />
        </>
    );
};

export default ProductPage;

ProductPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout2>{page}</NestedLayout2>
        </Layout>
    );
};
