import styles from './ServicesTemplate.module.scss';
import Image from 'next/image';
const ServicesTemplate = () => {
    return (
        <section>
            <div className={styles.secIntro}>
                <div className={styles.intro}>
                    <h2 className={styles.head}>Our Story</h2>
                    <p className={styles.body}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis iusto nam voluptatibus velit eius ullam fuga
                        quis explicabo vero quam, voluptatem facere
                        consequuntur? Nemo consectetur dicta cum a consequatur
                        quibusdam.
                    </p>
                </div>
            </div>
            <div className={styles.detail}>
                <h2>Why Chose Us</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti facere quam sapiente eum itaque magni temporibus
                    cum ab nobis unde illum, vero corrupti cupiditate
                    exercitationem. Fugit nam ea voluptatibus omnis? Alias
                    dolore facere quam quasi? Velit officiis impedit ut eligendi
                    qui fugit tempora eaque, voluptate dolorem ipsa molestiae
                    suscipit corrupti quibusdam quam vitae magni! Consectetur ad
                    error alias vel voluptate.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti facere quam sapiente eum itaque magni temporibus
                    cum ab nobis unde illum, vero corrupti cupiditate
                    exercitationem. Fugit nam ea voluptatibus omnis? Alias
                    dolore facere quam quasi? Velit officiis impedit ut eligendi
                    qui fugit tempora eaque, voluptate dolorem ipsa molestiae
                    suscipit corrupti quibusdam quam vitae magni! Consectetur ad
                    error alias vel voluptate.
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti facere quam sapiente eum itaque magni temporibus
                    cum ab nobis unde illum, vero corrupti cupiditate
                    exercitationem. Fugit nam ea voluptatibus omnis? Alias
                    dolore facere quam quasi? Velit officiis impedit ut eligendi
                    qui fugit tempora eaque, voluptate dolorem ipsa molestiae
                    suscipit corrupti quibusdam quam vitae magni! Consectetur ad
                    error alias vel voluptate.
                </p>
                <div className={styles.imgDetail}>
                    <Image
                        src="/images/home/golf-3d/2.png"
                        alt="golfimage"
                        width={944}
                        height={640}
                        layout="responsive"
                    ></Image>
                </div>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti facere quam sapiente eum itaque magni temporibus
                    cum ab nobis unde illum, vero corrupti cupiditate
                    exercitationem. Fugit nam ea voluptatibus omnis? Alias
                    dolore facere quam quasi? Velit officiis impedit ut eligendi
                    qui fugit tempora eaque, voluptate dolorem ipsa molestiae
                    suscipit corrupti quibusdam quam vitae magni! Consectetur ad
                    error alias vel voluptate.
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti facere quam sapiente eum itaque magni temporibus
                    cum ab nobis unde illum, vero corrupti cupiditate
                    exercitationem. Fugit nam ea voluptatibus omnis? Alias
                    dolore facere quam quasi? Velit officiis impedit ut eligendi
                    qui fugit tempora eaque, voluptate dolorem ipsa molestiae
                    suscipit corrupti quibusdam quam vitae magni! Consectetur ad
                    error alias vel voluptate.
                </p>
            </div>
        </section>
    );
};
export default ServicesTemplate;
