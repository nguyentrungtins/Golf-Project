import styles from './CourseSection.module.scss';
import Image from 'next/image';
import Img1 from '../../public/img1.png';
import Img2 from '../../public/img2.png';

import Button from '../Button';
import { BsArrowRight } from 'react-icons/bs';
import NextBtn from '../Button/NextBtn';
const CourseSection = () => {
    return (
        <section className={styles.sec} id="courses">
            <div className={styles.content}>
                <h2>JULIENNE</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Interdum consectetur libero id faucibus nisl
                    tincidunt. Interdum consectetur libero id faucibus nisl
                    tincidunt.
                </p>
                <div>
                    <Button gtheme circle rightIcon={<BsArrowRight />}></Button>
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.img1}>
                    <Image
                        src={Img1}
                        alt="Logo Image"
                        width={434}
                        height={621}
                        layout="fixed"
                    />
                </div>
                <div className={styles.img2}>
                    <Image
                        src={Img2}
                        alt="Logo Image"
                        width={303}
                        height={489}
                        layout="fixed"
                    />
                </div>
            </div>
        </section>
    );
};
export default CourseSection;
