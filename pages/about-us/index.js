import Head from 'next/head';
import Navbar from '../../components/Layouts/Navbar.jsx';
import Footer from '../../components/Layouts/Footer';
import IntroSection from '../../components/AboutUs/IntroSection.jsx';
import MemberSection from '../../components/AboutUs/MemberSection.jsx';
import ValueSection from '../../components/AboutUs/ValueSection.jsx';
import PartnerSection from '../../components/AboutUs/PartnerSection.jsx';

const AboutUsPage = () => {
    return (
        <div>
            <Head>
                <title>C G V - Chúng tôi</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>
            <Navbar />
            <IntroSection />
            <MemberSection />
            <ValueSection />
            <PartnerSection />
            <Footer />
        </div>
    );
};

export default AboutUsPage;
