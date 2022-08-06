import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinDetailSection from '../../../components/Admin/Bulletins/AdminBulletinDetailSection';

import dbConnect from '../../../lib/dbConnect';
import Bulletin from '../../../models/Bulletin';

const getBulletinById = async (id) => {
    await dbConnect();
    const bulletin = await Bulletin.findById(id);
    return JSON.parse(JSON.stringify(bulletin));
};

export const getServerSideProps = async (context) => {
    try {
        const id = context.params.id.trim();
        // console.log('>>> id: ', context.params.id);

        // CHECK ID IS UNDEFINED OR NOT
        if (id === 'undefined' || id === 'null') {
            // console.log('>>> go here');
            return {
                props: {
                    bulletin: {},
                },
            };
        }

        // PASSED CHECK ID
        // const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        // const host = isDevEnv
        //     ? process.env.API_DEV_HOST
        //     : process.env.API_PRODUCT_HOST;

        // const response = await fetch(`${host}/api/bulletin/${id}`);
        // const result = await response.json();
        const bulletin = await getBulletinById(id);
        console.log('>>> Bulletin: ', bulletin);
        return {
            props: {
                bulletin,
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
