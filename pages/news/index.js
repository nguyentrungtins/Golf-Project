import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import LastestSection from '../../components/News/LastestSection.jsx';

const NewsPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Tin tức</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <LastestSection />
            <Footer />
        </div>
    );
};

export default NewsPage;
