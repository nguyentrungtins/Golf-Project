import IntroSection from '../../components/AboutUs/IntroSection.jsx';
import MemberSection from '../../components/AboutUs/MemberSection.jsx';
import ValueSection from '../../components/AboutUs/ValueSection.jsx';
import PartnerSection from '../../components/AboutUs/PartnerSection.jsx';
import DetailHead from '../../components/Templates/DetailHead.jsx';
import NestedLayout from '../../components/Layouts/NestedLayout';
import Layout from '../../components/Layouts/Layout';

const AboutUsPage = () => {
    const data = {
        headerTmp: 'About Us',
        bodyTmp:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis iusto nam voluptatibus velit eius ullam fugaquis explicabo vero quam, voluptatem facere consequuntur? Nemo consectetur dicta cum a consequatur quibusdam.',
    };
    return (
        <>
            <DetailHead headerTmp={data.headerTmp} bodyTmp={data.bodyTmp} />
            <IntroSection />
            <MemberSection />
            <ValueSection />
            <PartnerSection />
        </>
    );
};

export default AboutUsPage;

AboutUsPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <NestedLayout>{page}</NestedLayout>
        </Layout>
    );
};
