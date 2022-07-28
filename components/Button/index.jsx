import React from 'react';
import styles from './Button.module.scss';

const Button = React.forwardRef((props, ref) => {
    let ownProps = {
        onClick: props.onClick,
    };

    let classNames = [
        styles.wrapper,
        props.className ? styles[className] : null,
        props.home ? styles.home : null,
        props.active ? styles.active : null,
        props.rounded ? styles.rounded : null,
        props.circle ? styles.circle : null,
        props.disabled ? styles.disabled : null,
        props.sm ? styles.sm : null,
        props.lg ? styles.lg : null,
        props.gtheme ? styles.gtheme : null,
        props.forIcon ? styles.forIcon : null,
    ].join(' ');

    let Component = 'button';
    if (props.forLabel) {
        Component = 'span';
    }

    return (
        <Component {...ownProps} ref={ref} className={classNames}>
            {props.leftIcon && (
                <span className={styles.icon}>{props.leftIcon}</span>
            )}
            <span className={styles.text}>{props.children}</span>
            {props.rightIcon && (
                <span className={styles.icon}>{props.rightIcon}</span>
            )}
        </Component>
    );
});

Button.displayName = 'MyCustomButtonComponent';
export default Button;
