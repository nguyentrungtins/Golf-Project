import ListProductSection from '../../components/Product/ListProductSection';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
const ProductPage = () => {
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
