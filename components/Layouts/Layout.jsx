import Head from 'next/head';
import Contact from './Contact';
import FooterSection from './Footer';
const MainLayout = (props) => {
    return (
        <>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            {/* <Contact /> */}
            <main>{props.children}</main>
            <footer>
                <FooterSection />
            </footer>
        </>
    );
};
export default MainLayout;
