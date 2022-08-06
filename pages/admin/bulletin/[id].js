import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinDetailSection from '../../../components/Admin/Bulletin/AdminBulletinDetailSection';

export const getServerSideProps = async (context) => {
    try {
        const id = context.params.id;
        // console.log('>>> id: ', context.params.id);

        // CHECK ID IS UNDEFINED OR NOT
        if (id === 'undefined') {
            console.log('>>> go here');
            return {
                props: {
                    bulletin: {},
                },
            };
        }

        // PASSED CHECK ID
        const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        const host = isDevEnv
            ? process.env.API_DEV_HOST
            : process.env.API_PRODUCT_HOST;

        const response = await fetch(`${host}/api/bulletin/${id}`);
        const result = await response.json();
        return {
            props: {
                bulletin: result.data,
            },
        };
    } catch (error) {
        console.error(error);
    }
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
