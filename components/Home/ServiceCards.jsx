import Image from 'next/image';
import PeoPleIcon from '../../public/people_icon.png';
import styles from './ServiceCards.module.scss';

const ServiceCards = () => {
    return (
        <div className={styles.card}>
            <div>
                <Image
                    src={PeoPleIcon}
                    alt="Logo Image"
                    width={60}
                    height={60}
                    layout="fixed"
                />
            </div>
            <div>
                <h3>Academy</h3>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    );
};
export default ServiceCards;
