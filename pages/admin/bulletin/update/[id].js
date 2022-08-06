import Head from 'next/head';
import Navbar from '../../../../components/Layouts/Admin/Navbar';
import AdminUpdateBulletinSection from '../../../../components/Admin/Bulletin/AdminUpdateBulletinSection';

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

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const response = await fetch(`http://localhost:3000/api/bulletin/${id}`);
//     const result = await response.json();
//     return {
//         props: {
//             bulletin: result.data,
//         },
//         revalidate: 1,
//     };
// };

export const getServerSideProps = async (context) => {
    try {
        const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        const host = isDevEnv
            ? process.env.API_DEV_HOST
            : process.env.API_PRODUCT_HOST;

        const id = context.params.id;
        if (id) {
            const response = await fetch(`${host}/api/bulletin/${id}`);
            const result = await response.json();
            return {
                props: {
                    bulletin: result.data,
                },
            };
        }
    } catch (error) {
        console.error(error);
    }
};

const AdminUpdateBulletinPage = ({ bulletin }) => {
    return (
        <div>
            <Head>
                <title>C G V ADMIN - Cập nhật tin tức</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <main>
                <Navbar />
                <AdminUpdateBulletinSection bulletin={bulletin} />
            </main>
        </div>
    );
};

export default AdminUpdateBulletinPage;
