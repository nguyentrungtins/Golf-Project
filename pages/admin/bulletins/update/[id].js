import Head from 'next/head';
import Navbar from '../../../../components/Layouts/Admin/Navbar';
import AdminUpdateBulletinSection from '../../../../components/Admin/Bulletins/AdminUpdateBulletinSection';

import dbConnect from '../../../../lib/dbConnect';
import Bulletin from '../../../../models/Bulletin';

const getBulletinById = async (id) => {
    await dbConnect();
    const bulletin = await Bulletin.findById(id);
    return JSON.parse(JSON.stringify(bulletin));
};

export const getServerSideProps = async (context) => {
    try {
        const id = context.params.id.trim();

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
        const bulletin = await getBulletinById(id);
        return {
            props: {
                bulletin,
            },
        };
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
