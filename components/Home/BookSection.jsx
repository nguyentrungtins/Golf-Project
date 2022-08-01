import styles from './BookSection.module.scss';

const BookSection = () => {
    return (
        <div className={styles.container}>
            <div>
                <a href="#">Find yourself here.</a>
            </div>
            <div>
                <a href="#">Book now</a>
            </div>
        </div>
    );
};

export default BookSection;
