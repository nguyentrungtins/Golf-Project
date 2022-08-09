import ProductDetailSection from '../../components/Product/ProductDetailSection.jsx';
import NestedLayout2 from '../../components/Layouts/NestedLayout2.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
const ProductDetailPage = () => {
    return (
        <>
            <ProductDetailSection />
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
