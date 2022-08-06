import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinSection from '../../../components/Admin/Bulletins';

import dbConnect from '../../../lib/dbConnect';
import Bulletin from '../../../models/Bulletin';

const getAllBulletins = async () => {
    await dbConnect();
    const bulletins = await Bulletin.find({});
    return JSON.parse(JSON.stringify(bulletins));
};

export const getServerSideProps = async () => {
    try {
        const bulletins = await getAllBulletins();
        // console.log('>>> Bulletins: ', bulletins);
        return {
            props: {
                bulletins,
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
