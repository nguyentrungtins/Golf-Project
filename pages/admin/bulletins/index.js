import Layout from '../../../components/Layouts/Layout';
import NestedLayoutAdmin from '../../../components/Layouts/NestedLayoutAdmin';
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
                bulletins: bulletins.sort(
                    (a, b) =>
                        Number(new Date(b.updatedAt)) -
                        Number(new Date(a.updatedAt))
                ),
            },
        };
    } catch (error) {
        console.error(error);
    }
};

const AdminBulletinPage = ({ bulletins }) => {
    return (
        <>
            <AdminBulletinSection bulletins={bulletins} />
        </>
    );
};

AdminBulletinPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayoutAdmin>{page}</NestedLayoutAdmin>
        </Layout>
    );
};

export default AdminBulletinPage;
