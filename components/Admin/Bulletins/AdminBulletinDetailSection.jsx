import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import styles from './AdminBulletinDetailSection.module.scss';
import Button from '../../Button';
import { BiArrowBack, BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import Modal from '../../Modal';

const AdminBulletinDetailSection = ({ bulletin = {} }) => {
    const router = useRouter();
    const articleRef = useRef();
    const loadingToast = useRef();
    const [showModal, setShowModal] = useState(false);

    // SET CONTENT OF ARTICLE
    useEffect(() => {
        let articleContent = '';
        if (bulletin) {
            const splitArticle = bulletin.article
                .split('\n')
                .filter((item) => item !== '');
            // console.log(bulletin.article);
            // console.log(splitArticle);
            splitArticle.forEach((item) => {
                // CHECK HEADING
                if (item[0] === '#') {
                    let count = 1;
                    while (item[count] === '#') {
                        count += 1;
                    }

                    articleContent += `
                    <h${count}>${item.slice(count, item.length)}</h${count}>
                `;
                }
                // CHECK IMAGE
                else if (item.startsWith('!Image')) {
                    const imageName = item.slice(7, item.length - 1);

                    const image = bulletin.images.find(
                        (item) => item.name === imageName
                    );
                    if (image) {
                        articleContent += `
                            <div>
                                <img
                                    src="${image.url}"
                                    alt="image"
                                />
                            </div>
                        `;
                    }
                } else {
                    articleContent += `<p>${item}</p>`;
                }
            });

            articleRef.current.innerHTML = articleContent;
        }
    }, [bulletin]);

    // ONCLICK ON CONFIRM DELETE BULLETIN BUTTON
    const handleOnClickDeleteBulletin = async () => {
        setShowModal(false);

        if (bulletin._id) {
            // ADD LOADING TOAST FOR HANDLE CALL API
            loadingToast.current = toast.info('Đang xử lý xóa tin', {
                autoClose: false,
                closeOnClick: false,
            });

            const response = await fetch(
                `/api/bulletins/${bulletin._id.toString()}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(bulletin),
                }
            );

            // GET RESULT FROM API
            const result = await response.json();
            console.log(result);
            if (result.success) {
                // SHOW SUCCESS TOAST
                toast.update(loadingToast.current, {
                    render: result.message,
                    type: toast.TYPE.SUCCESS,
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    onClose: () => router.push('/admin/bulletins'),
                });
            } else {
                // SHOW ERROR TOAST
                toast.update(loadingToast.current, {
                    render: result.message,
                    type: toast.TYPE.ERROR,
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.actions}>
                <Link href="/admin/bulletins">
                    <Button forIcon>
                        <BiArrowBack />
                    </Button>
                </Link>
                <div>
                    {bulletin._id && (
                        <Link
                            href={`/admin/bulletins/update/${bulletin._id.toString()}`}
                        >
                            <Button forIcon>
                                <BiEditAlt />
                            </Button>
                        </Link>
                    )}

                    <Button forIcon onClick={() => setShowModal(true)}>
                        <AiOutlineDelete />
                    </Button>
                </div>
            </div>
            {bulletin.title && (
                <h1 className={styles.title}>{bulletin.title}</h1>
            )}
            {bulletin.published && (
                <p className={styles.published}>
                    <span>
                        {new Date(bulletin.updatedAt)
                            .toISOString()
                            .slice(0, 10)}
                    </span>
                </p>
            )}
            {bulletin.banner && (
                <div className={styles.banner}>
                    {bulletin.banner.url && (
                        <Image
                            src={bulletin.banner.url}
                            alt="image"
                            width={bulletin.banner.width}
                            height={bulletin.banner.height}
                            layout="responsive"
                            priority={true}
                        />
                    )}
                </div>
            )}

            <div className={styles.article} ref={articleRef}></div>
            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="Xác nhận xóa tin"
                onClickConfirmDeleteButton={handleOnClickDeleteBulletin}
            >
                Hành động này không thể khôi phục. Bạn chắc chắn muốn xóa tin
                này?
            </Modal>
            <ToastContainer
                position="bottom-right"
                theme="colored"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
            />
        </div>
    );
};

export default AdminBulletinDetailSection;
