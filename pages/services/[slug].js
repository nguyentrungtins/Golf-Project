import Template from '../../components/Services/ServicesTemplate';
import path from 'path';
import fs from 'fs/promises';
import NestedLayout from '../../components/Layouts/NestedLayout.jsx';
import Layout from '../../components/Layouts/Layout.jsx';
const Services = (props) => {
    const { loadedContent } = props;
    return (
        <>
            <Template content={loadedContent} />
        </>
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

Services.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
