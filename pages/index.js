import HomeSection from '../components/Home/HomeSection.jsx';
import AboutUsSection from '../components/Home/AboutUsSection';
import BestSellersSection from '../components/Home/BestSellersSection';
import Golf3dSection from '../components/Home/Golf3dSection';
import BookSection from '../components/Home/BookSection';
import ServicesSection from '../components/Home/ServicesSection';
import CourseSection from '../components/Home/CourseSection.jsx';

import Layout from '../components/Layouts/Layout';
import NestedLayout from '../components/Layouts/NestedLayout.jsx';

export default function Home() {
    return (
        <>
            <HomeSection />
            <AboutUsSection />
            <ServicesSection />
            <BestSellersSection />
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
