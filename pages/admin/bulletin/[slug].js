import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinDetailSection from '../../../components/Admin/Bulletin/AdminBulletinDetailSection';

const AdminNewsDetailPage = () => {
    return (
        <div>
            <Head>
                <title>C G V ADMIN - Tin tức chi tiết</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <main>
                <Navbar />
                <AdminBulletinDetailSection />
            </main>
        </div>
    );
};

export default AdminNewsDetailPage;
