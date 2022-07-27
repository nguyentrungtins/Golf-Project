import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import ListProductSection from '../../components/Product/ListProductSection';
import Contact from '../../components/Layouts/Contact';

const ProductPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Sản phẩm</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <Contact />
            <ListProductSection />
            <Footer />
        </div>
    );
};

export default ProductPage;
