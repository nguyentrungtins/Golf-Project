import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import NewsSection from '../../components/News/NewsSection.jsx';
import Contact from '../../components/Layouts/Contact';

const NewsPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Tin tức</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <Contact />
            <NewsSection />
            <Footer />
        </div>
    );
};

export default NewsPage;
