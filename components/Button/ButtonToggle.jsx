import styles from './ButtonToggle.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
const ButtonToggle = ({ name, key = '' }) => {
    const [btnActive, setBtnActive] = useState(false);

    const click = () => {
        setBtnActive(!btnActive);
    };
    const btnStyle = classnames(styles.btn, btnActive ? styles.active : '');
    return (
        <button className={btnStyle} onClick={click} type="button">
            {name}
        </button>
    );
};
export default ButtonToggle;
