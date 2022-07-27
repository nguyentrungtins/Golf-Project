import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import ProductDetailSection from '../../components/Product/ProductDetailSection.jsx';
import Contact from '../../components/Layouts/Contact';

const ProductDetailPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Chi tiết sản phẩm</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <Contact />
            <ProductDetailSection />
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
