import styles from './ButtonToggle.module.scss';
import classnames from 'classnames';
import { useState } from 'react';
const ButtonToggle = ({ name, fixed = false, isActive = false }) => {
    const [btnActive, setBtnActive] = useState(false);
    const [isBtnActive, setIsBtnActive] = useState(isActive);
    const click = () => {
        if (!fixed) {
            if (isActive && isBtnActive) {
                setIsBtnActive(false);
            } else {
                setBtnActive(!btnActive);
            }
        } else {
            setBtnActive(false);
        }
        setIsBtnActive(false);
    };
    const btnStyle = classnames(
        styles.btn,
        btnActive || isBtnActive ? styles.active : ''
    );
    return (
        <button className={btnStyle} onClick={click} type="button">
            {name}
        </button>
    );
};
export default ButtonToggle;
