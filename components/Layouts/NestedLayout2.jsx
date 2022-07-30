import Contact from './Contact';
import FooterSection from './Footer';
import Navbar from './Navbar/Navbar';
const NestedLayout = (props) => {
    return (
        <>
            <Navbar />
            <Contact />
            <main>{props.children}</main>
            <footer>
                <FooterSection />
            </footer>
        </>
    );
};
export default NestedLayout;
