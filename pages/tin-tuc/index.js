import BulletinSection from '../../components/Bulletin/BulletinSection.jsx';
import NestedLayout from '../../components/Layouts/NestedLayout';
import Layout from '../../components/Layouts/Layout';

import dbConnect from '../../lib/dbConnect.js';
import Bulletin from '../../models/Bulletin.js';

const getAllBulletins = async () => {
    await dbConnect();
    const bulletins = await Bulletin.find({});
    return JSON.parse(JSON.stringify(bulletins));
};

export const getStaticProps = async () => {
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

const BulletinPage = ({ bulletins }) => {
    return (
        <>
            <BulletinSection bulletins={bulletins} useSlug />
        </>
    );
};

export default BulletinPage;

BulletinPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
