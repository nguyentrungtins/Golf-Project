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
        <>
            <Navbar isNavTrans={true}></Navbar>
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
