import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminCreateNewSection from '../../../components/Admin/News/AdminCreateNewSection';

const CreateNewPage = () => {
    return (
        <div>
            <Head>
                <title>C G V ADMIN - Tạo tin mới</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <main>
                <Navbar />
                <AdminCreateNewSection />
            </main>
        </div>
    );
};

export default CreateNewPage;
