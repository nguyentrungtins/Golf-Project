import { useState } from 'react';
import styles from './SubLinkNav.module.scss';
const SubLinkLevel2 = ({ name, subName }) => {
    let subLinkLV2;
    const [navLinkHover, setNavLinkHover] = useState(false);

    const navLinkMouseInHandler = () => {
        console.log('On Mount In');
        setNavLinkHover(true);
    };
    const navLinkMouseOutHandler = () => {
        console.log('On Mount Out');
        setNavLinkHover(false);
    };
    if (subName.length > 0) {
        subLinkLV2 = subName.map((e) => {
            return <li className={styles.subLVItem}>{e}</li>;
        });
    }
    return (
        <li
            className={styles.item}
            onMouseEnter={navLinkMouseInHandler}
            onMouseLeave={navLinkMouseOutHandler}
        >
            <a href="#">{name}</a>

            {navLinkHover && (
                <ul className={styles.subLinkLV2}>
                    <span className={styles.wrapper2}></span>
                    {subLinkLV2}
                </ul>
            )}
        </li>
    );
};
export default SubLinkLevel2;
