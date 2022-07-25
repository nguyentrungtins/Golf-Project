import styles from './ServicesSection.module.scss';
import Image from 'next/image';
import GoleHole from '../../public/Golf-Hole.png';
import Ball_XL from '../../public/Ball_XL.png';
import ServiceCards from './ServiceCards';
const ServicesSection = () => {
    return (
        <section className={styles.sec}>
            <div className={styles.head}>
                <div className={styles.ball_icon}>
                    <Image
                        src={Ball_XL}
                        alt="Logo Image"
                        width={182}
                        height={182}
                        layout="fixed"
                    />
                </div>
                <div className={styles.ball_icon_sm}>
                    <Image
                        src={Ball_XL}
                        alt="Logo Image"
                        width={96}
                        height={96}
                        layout="fixed"
                    />
                </div>
                <Image
                    src={GoleHole}
                    alt="Logo Image"
                    width={83}
                    height={81}
                    layout="fixed"
                />

                <h1>
                    Featured
                    <br />
                    Services That We Provide
                </h1>
                <p>
                    Our goal is to provide with you all of the services
                    <br />
                    and information
                </p>
            </div>
            <div className={styles.body}>
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
                <ServiceCards />
            </div>
        </section>
    );
};
export default ServicesSection;
