import HomeSection from '../components/Home/HomeSection.jsx';
import AboutUsSection from '../components/Home/AboutUsSection';
import BestSellersSection from '../components/Home/BestSellersSection';
import Golf3dSection from '../components/Home/Golf3dSection';
import BookSection from '../components/Home/BookSection';
import ServicesSection from '../components/Home/ServicesSection';
import CourseSection from '../components/Home/CourseSection.jsx';

import Layout from '../components/Layouts/Layout';
import NestedLayout from '../components/Layouts/NestedLayout.jsx';

import dbConnect from '../lib/dbConnect';
import Product from '../models/Product';

const getDiscountProducts = async () => {
    await dbConnect();
    const products = await Product.find({
        'price.sale': { $gt: 0 },
    });
    return JSON.parse(JSON.stringify(products));
};

export const getStaticProps = async () => {
    try {
        const discountProducts = await getDiscountProducts();

        return {
            props: {
                discountProducts: discountProducts.sort(
                    (a, b) => parseInt(b.price.sale) - parseInt(a.price.sale)
                ),
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error(error);
    }
};

export default function Home({ discountProducts = [] }) {
    return (
        <>
            <HomeSection />
            <AboutUsSection />
            <ServicesSection />
            <BestSellersSection discountProducts={discountProducts} />
            <CourseSection />
            <Golf3dSection />
            <BookSection />
        </>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
