import BulletinDetailSection from '../../components/Bulletin/BulletinDetailSection';
import NestedLayout2 from '../../components/Layouts/NestedLayout2';
import Layout from '../../components/Layouts/Layout';
import ListBulletinsSliderSection from '../../components/Bulletin/ListBulletinsSliderSection';

export const getStaticPaths = async () => {
    // GET ALL BULLETINS FROM API
    const res = await fetch('http://localhost:3000/api/bulletin');
    const result = await res.json();
    const bulletins = result.data;
    return {
        paths: bulletins.map((bulletin) => ({
            params: {
                slug: bulletin.slug,
            },
        })),
        fallback: true,
    };
};

export const getStaticProps = async (context) => {
    // GET ALL BULLETINS FROM API
    const fetchAllRes = await fetch('http://localhost:3000/api/bulletin');
    const fetchAllResult = await fetchAllRes.json();
    const bulletins = fetchAllResult.data;

    // GET BULLETIN FROM API
    const slug = context.params.slug;
    const fetchOneRes = await fetch(
        `http://localhost:3000/api/bulletin/slug/${slug}`
    );
    const fetchOneResult = await fetchOneRes.json();
    const bulletin = fetchOneResult.data;
    return {
        props: {
            bulletins,
            bulletin,
        },
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
