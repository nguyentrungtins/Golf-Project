import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import ProductDetailSection from '../../components/Product/ProductDetailSection.jsx';
import ProductDetailTabSection from '../../components/Product/ProductDetailTabSection.jsx';
import ProductsSliderSection from '../../components/Product/ProductsSliderSection.jsx';

const ProductDetailPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Chi tiết sản phẩm</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <ProductDetailSection />
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
