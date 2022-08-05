import styles from './ServicesTemplate.module.scss';
import Image from 'next/image';
const ServicesTemplate = ({ content }) => {
    const { title, titleDisc, head1, p1, imgPath, p2 } = content;
    let key;
    const paragraph1 = p1.map((content) => {
        key = Math.floor(Math.random() * 100);
        return <p key={key}>{content}</p>;
    });
    const paragraph2 = p2.map((content) => {
        key = Math.floor(Math.random() * 100);
        return <p key={key}>{content}</p>;
    });
    return (
        <section>
            <div className={styles.secIntro}>
                <div className={styles.intro}>
                    <h2 className={styles.head}>{title}</h2>
                    <p className={styles.body}>{titleDisc}</p>
                </div>
            </div>
            <div className={styles.detail}>
                <h2>{head1}</h2>
                {paragraph1}

                <div className={styles.imgDetail}>
                    <Image
                        src={imgPath}
                        alt="golfimage"
                        width={944}
                        height={640}
                        layout="responsive"
                    ></Image>
                </div>
                {paragraph2}
            </div>
        </section>
    );
};
export default ServicesTemplate;
