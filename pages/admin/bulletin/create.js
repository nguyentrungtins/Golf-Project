import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminCreateNewBulletinSection from '../../../components/Admin/Bulletin/AdminCreateNewBulletinSection';

const AdminCreateNewBulletinPage = () => {
    return (
        <>
            {/* <Toast show={true} /> */}
            <Navbar />
            <AdminCreateNewBulletinSection />
        </>
    );
};

export default AdminCreateNewBulletinPage;
