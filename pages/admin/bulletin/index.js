import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinSection from '../../../components/Admin/Bulletin';

export const getServerSideProps = async () => {
    try {
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

const AdminBulletinPage = ({ bulletins }) => {
    return (
        <>
            <Navbar />
            <AdminBulletinSection bulletins={bulletins} />
        </>
    );
};

export default AdminBulletinPage;
