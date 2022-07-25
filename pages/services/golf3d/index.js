import Head from 'next/head';
import Navbar from '../../../components/Layouts/Navbar';
import FooterSection from '../../../components/Layouts/Footer';
const index = () => {
    return (
        <div>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar isNavTrans={true}></Navbar>
            <main></main>

            <footer>
                <FooterSection />
            </footer>
        </div>
    );
};
export default index;
