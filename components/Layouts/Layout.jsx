import Head from 'next/head';
const Layout = (props) => {
    return (
        <>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            {props.children}
        </>
    );
};
export default Layout;
