import styles from './Button.module.scss';
import Link from 'next/link';

const Button = ({
    children,
    className,
    onClick,
    home,
    active,
    rounded,
    circle,
    disabled,
    sm,
    lg,
    leftIcon,
    rightIcon,
}) => {
    let props = {
        onClick,
    };

    console.log('>>> ClassNAME: ', className);

    let classNames = [
        styles.wrapper,
        className ? styles[className] : '',
        home ? styles.home : '',
        active ? styles.active : '',
        rounded ? styles.rounded : '',
        circle ? styles.circle : '',
        disabled ? styles.disabled : '',
        sm ? styles.sm : '',
        lg ? styles.lg : '',
    ].join(' ');

    let Component = 'button';

    return (
        <Component {...props} className={classNames}>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span className={styles.text}>{children}</span>
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </Component>
    );
};

export default Button;
