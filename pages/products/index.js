import { useRouter } from 'next/router';
import ListProductSection from '../../components/Product/ListProductSection';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
const ProductPage = () => {
    const router = useRouter();
    const { cat } = router.query;
    console.log(cat);
    return (
        <>
            <ListProductSection />
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
