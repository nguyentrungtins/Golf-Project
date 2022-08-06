import Layout from '../../../components/Layouts/Layout';
import NestedLayoutAdmin from '../../../components/Layouts/NestedLayoutAdmin';
import AdminCreateNewBulletinSection from '../../../components/Admin/Bulletins/AdminCreateNewBulletinSection';

const AdminCreateNewBulletinPage = () => {
    return (
        <>
            <AdminCreateNewBulletinSection />
        </>
    );
};

AdminCreateNewBulletinPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayoutAdmin>{page}</NestedLayoutAdmin>
        </Layout>
    );
};

export default AdminCreateNewBulletinPage;
