import styles from './NextBtn.module.scss';
import { BsArrowRight } from 'react-icons/bs';

const NextBtn = () => {
    return (
        <div className={styles.nextBtnWrap}>
            <button className={styles.nextbtn}>
                <BsArrowRight className={styles.nextBtnIcon} />
            </button>
        </div>
    );
};
export default NextBtn;
