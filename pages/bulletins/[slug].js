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
    // const isDevEnv = process.env.NODE_ENV !== 'production'; // development
    // const host = isDevEnv
    //     ? process.env.API_DEV_HOST
    //     : process.env.API_PRODUCT_HOST;

    // GET ALL BULLETINS FROM API
    // const res = await fetch(`http://localhost:3000/api/bulletin`);
    // const result = await res.json();
    // const bulletins = result.data;

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
    // const isDevEnv = process.env.NODE_ENV !== 'production'; // development
    // const host = isDevEnv
    //     ? process.env.API_DEV_HOST
    //     : process.env.API_PRODUCT_HOST;

    // GET ALL BULLETINS FROM API
    // const fetchAllRes = await fetch(`http://localhost:3000/api/bulletin`);
    // const fetchAllResult = await fetchAllRes.json();
    // const bulletins = fetchAllResult.data;
    const bulletins = await getAllBulletins();

    // GET BULLETIN FROM API
    const slug = context.params.slug;
    // const fetchOneRes = await fetch(
    //     `http://localhost:3000/api/bulletin/slug/${slug}`
    // );
    // const fetchOneResult = await fetchOneRes.json();
    // const bulletin = fetchOneResult.data;
    const bulletin = await getBulletinBySlug(slug);

    return {
        props: {
            bulletins,
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
