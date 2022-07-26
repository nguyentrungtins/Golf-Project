import styles from './DetailHead.module.scss';
const DetailHead = ({ headerTmp, bodyTmp }) => {
    return (
        <section>
            <div className={styles.secIntro}>
                <div className={styles.intro}>
                    <h2 className={styles.head}>{headerTmp}</h2>
                    <p className={styles.body}>{bodyTmp}</p>
                </div>
            </div>
        </section>
    );
};
export default DetailHead;
