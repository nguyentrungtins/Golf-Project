import BulletinDetailSection from '../../components/Bulletin/BulletinDetailSection';
import NestedLayout2 from '../../components/Layouts/NestedLayout2';
import Layout from '../../components/Layouts/Layout';
import ListBulletinsSliderSection from '../../components/Bulletin/ListBulletinsSliderSection';

import dbConnect from '../../lib/dbConnect.js';
import Bulletin from '../../models/Bulletin.js';

const getAllBulletins = async () => {
    await dbConnect();
    const bulletins = await Bulletin.find({});
    return JSON.parse(JSON.stringify(bulletins));
};

const getBulletinBySlug = async (slug) => {
    await dbConnect();
    const bulletin = await Bulletin.findOne({ slug });
    return JSON.parse(JSON.stringify(bulletin));
};

export const getStaticPaths = async (context) => {
    const bulletins = await getAllBulletins();
    return {
        paths: bulletins.map((bulletin) => ({
            params: {
                slug: bulletin.slug.toString().trim(),
            },
        })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    const bulletins = await getAllBulletins();

    // GET BULLETIN FROM API
    const slug = context.params.slug;

    // CHECK SLUG IS UNDEFINED OR NOT
    if (slug === 'undefined' || slug === 'null') {
        // console.log('>>> go here');
        return {
            props: {
                bulletin: {},
            },
        };
    }

    const bulletin = await getBulletinBySlug(slug);

    return {
        props: {
            bulletins: bulletins.sort(
                (a, b) =>
                    Number(new Date(b.updatedAt)) -
                    Number(new Date(a.updatedAt))
            ),
            bulletin,
        },
        revalidate: 3600,
    };
};

const BulletinDetailPage = ({ bulletin, bulletins }) => {
    return (
        <>
            <BulletinDetailSection bulletin={bulletin} />
            <ListBulletinsSliderSection bulletins={bulletins} />
        </>
    );
};

export default BulletinDetailPage;

BulletinDetailPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout2>{page}</NestedLayout2>
        </Layout>
    );
};
