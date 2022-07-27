import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminNewsSection from '../../../components/Admin/News';

const AdminNewsPage = () => {
    return (
        <div>
            <Head>
                <title>C G V ADMIN - Tin tức</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <AdminNewsSection />
        </div>
    );
};

export default AdminNewsPage;
