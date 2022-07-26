import Head from 'next/head';
import HomeSection from '../components/Home/HomeSection.jsx';
import AboutUsSection from '../components/Home/AboutUsSection';
import BestSellersSection from '../components/Home/BestSellersSection';
import Golf3dSection from '../components/Home/Golf3dSection';
import BookSection from '../components/Home/BookSection';
import FooterSection from '../components/Layouts/Footer';

import Navbar from '../components/Layouts/Navbar.jsx';
import ServicesSection from '../components/Home/ServicesSection';
import CourseSection from '../components/Home/CourseSection.jsx';
import Contact from '../components/Layouts/Contact.jsx';
export default function Home() {
    return (
        <div>
            <Head>
                <title>C G V</title>
                <meta name="description" content="Golf" />
                <link rel="icon" href="/small_logo.png" crossOrigin />
            </Head>

            <Navbar isNavTrans={true}></Navbar>
            <Contact />
            <main>
                <HomeSection />
                <AboutUsSection />
                <ServicesSection />
                <BestSellersSection />
                <CourseSection />
                <Golf3dSection />
                <BookSection />
            </main>

            <footer>
                <FooterSection />
            </footer>
        </div>
    );
}
