import styles from './HomePage.module.scss';
import Navbar from '../Layouts/Navbar';
const HomePage = () => {
    return (
        <div className={styles.bg}>
            <Navbar></Navbar>
        </div>
    );
};

export default HomePage;
