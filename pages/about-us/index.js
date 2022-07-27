import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import IntroSection from '../../components/AboutUs/IntroSection.jsx';
import MemberSection from '../../components/AboutUs/MemberSection.jsx';
import ValueSection from '../../components/AboutUs/ValueSection.jsx';
import PartnerSection from '../../components/AboutUs/PartnerSection.jsx';
import DetailHead from '../../components/Templates/DetailHead.jsx';
import Contact from '../../components/Layouts/Contact';

const AboutUsPage = () => {
    const data = {
        headerTmp: 'About Us',
        bodyTmp:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis iusto nam voluptatibus velit eius ullam fugaquis explicabo vero quam, voluptatem facere consequuntur? Nemo consectetur dicta cum a consequatur quibusdam.',
    };
    return (
        <div>
            <Head>
                <title>C G V - Chúng tôi</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar isNavTrans={true} />
            <DetailHead headerTmp={data.headerTmp} bodyTmp={data.bodyTmp} />
            <Contact />
            <IntroSection />
            <MemberSection />
            <ValueSection />
            <PartnerSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
