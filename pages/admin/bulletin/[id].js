import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinDetailSection from '../../../components/Admin/Bulletin/AdminBulletinDetailSection';

// export const getStaticPaths = async () => {
//     const response = await fetch('http://localhost:3000/api/bulletin');
//     const result = await response.json();
//     const bulletins = result.data;
//     return {
//         paths: bulletins.map((bulletin) => ({
//             params: {
//                 id: bulletin._id.toString(),
//             },
//         })),
//         fallback: true,
//     };
// };

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    const response = await fetch(`http://localhost:3000/api/bulletin/${id}`);
    const result = await response.json();
    return {
        props: {
            bulletin: result.data,
        },
    };
};

const AdminNewsDetailPage = ({ bulletin }) => {
    return (
        <div>
            <Head>
                <title>C G V ADMIN - Tin tức chi tiết</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <main>
                <Navbar />
                <AdminBulletinDetailSection bulletin={bulletin} />
            </main>
        </div>
    );
};

export default AdminNewsDetailPage;
