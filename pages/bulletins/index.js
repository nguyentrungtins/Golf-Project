import BulletinSection from '../../components/Bulletin/BulletinSection.jsx';
import NestedLayout from '../../components/Layouts/NestedLayout';
import Layout from '../../components/Layouts/Layout';

export const getStaticProps = async () => {
    try {
        const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        const host = isDevEnv
            ? process.env.API_DEV_HOST
            : process.env.API_PRODUCT_HOST;

        // CALL API TO GET ALL BULLETINS
        const res = await fetch(`${host}/api/bulletin`);
        const result = await res.json();
        return {
            props: {
                bulletins: result.data,
            },
        };
    } catch (error) {
        console.error(error);
    }
};

const BulletinPage = ({ bulletins }) => {
    return (
        <>
            <BulletinSection bulletins={bulletins} useSlug />
        </>
    );
};

export default BulletinPage;

BulletinPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
