import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinSection from '../../../components/Admin/Bulletin';

export const getServerSideProps = async () => {
    try {
        const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        const host = isDevEnv
            ? process.env.API_DEV_HOST
            : process.env.API_PRODUCT_HOST;

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

const AdminBulletinPage = ({ bulletins }) => {
    return (
        <>
            <Navbar />
            <AdminBulletinSection bulletins={bulletins} />
        </>
    );
};

export default AdminBulletinPage;
