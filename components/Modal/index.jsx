import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import Button from '../Button';
import { VscChromeClose } from 'react-icons/vsc';

const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h5>{title}</h5>
                    <a href="#" onClick={handleClose}>
                        <Button forIcon>
                            <VscChromeClose />
                        </Button>
                    </a>
                </div>
                <div className={styles.body}>{children}</div>
                <div className={styles.footer}>
                    <Button onClick={handleClose}>Hủy bỏ</Button>
                    <Button>Đồng ý</Button>
                </div>
            </div>
        </div>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById('modal-root')
        );
    } else {
        return null;
    }
};

export default Modal;
