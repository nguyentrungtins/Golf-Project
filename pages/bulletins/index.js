import BulletinSection from '../../components/Bulletin/BulletinSection.jsx';
import NestedLayout from '../../components/Layouts/NestedLayout';
import Layout from '../../components/Layouts/Layout';

export const getStaticProps = async () => {
    try {
        // CALL API TO GET ALL BULLETINS
        const res = await fetch('http://localhost:3000/api/bulletin');
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
