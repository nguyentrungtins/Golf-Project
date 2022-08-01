import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminCreateNewBulletinSection from '../../../components/Admin/Bulletin/AdminCreateNewBulletinSection';
import Toast from '../../../components/Toast';

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
