import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import Contact from '../../components/Layouts/Contact';
import Template from '../../components/Services/ServicesTemplate';
import path from 'path';
import fs from 'fs/promises';
import { useRouter } from 'next/router.js';

const Services = (props) => {
    const { loadedContent } = props;
    return (
        <div>
            <Head>
                <title>C G V - Chi tiết sản phẩm</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <Contact />
            <Template content={loadedContent} />
            <Footer />
        </div>
    );
};

export async function getStaticProps(context) {
    const { params } = context;

    const pageID = params.slug;

    const filePath = path.join(process.cwd(), 'data', 'services-content.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const content = data.services.find((content) => content.url === pageID);

    return {
        props: {
            loadedContent: content.content,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'golf-3d' } },
            { params: { slug: 'booking-golf' } },
            { params: { slug: 'tour-golf' } },
        ],
        fallback: false,
    };
}

export default Services;
