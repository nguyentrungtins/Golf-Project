import { useState, useRef } from 'react';
import styles from './AdminCreateNewBulletinSection.module.scss';
import Button from '../../Button';
import { BsUpload } from 'react-icons/bs';

const AdminCreateNewBulletinSection = () => {
    const textArticleRef = useRef();

    const [bannerImageSrc, setBannerImageSrc] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [articleInput, setArticleInput] = useState('');
    const [articleImages, setArticleImages] = useState([]);

    // RANDOM STRING FUNCTION
    function randomString() {
        const length = 8;
        const chars =
            '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    // ONCHANGE EVENT IN BANNER INPUT
    const handleOnChangeBannerInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setBannerImageSrc(reader.result);
            };
        }
    };

    // ONCHANGE EVENT IN IMAGE INPUT
    const handleOnChangeImageInput = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            // SET IMAGE NAME
            let date = new Date();
            let imageName =
                date.getDate() + date.getTime() + randomString() + file.name;

            // READ FILE
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setArticleImages((prev) => [
                    ...prev,
                    { name: imageName, src: reader.result },
                ]);
            };

            // CHANGE STATE OF ARTICLE INPUT VALUE
            const curPos = textArticleRef.current.selectionStart;
            const textToInsert = `\r!Image[${imageName}]\r`;
            setArticleInput(
                (prev) =>
                    prev.slice(0, curPos) + textToInsert + prev.slice(curPos)
            );
        }
    };

    // ONCLICK EVENT ON CREATE BUTTON (SUBMIT)
    const handleOnClickCreateButton = async () => {
        // console.log('>>> bannerImageSrc: ', bannerImageSrc);
        // console.log('>>> titleInput: ', titleInput);
        // console.log('>>> articleInput: ', articleInput);
        // console.log('>>> articleImages: ', articleImages);
        const data = {
            title: titleInput,
            article: articleInput,
            banner: bannerImageSrc,
            images: articleImages,
        };

        const res = await fetch('http://localhost:3000/api/bulletin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
            },
        });
        const result = await res.json();
        console.log(result);
    };

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.banner}
                style={{ backgroundImage: `url("${bannerImageSrc}")` }}
            >
                <input
                    type="file"
                    accept="image/*"
                    id="banner-upload"
                    hidden
                    onChange={handleOnChangeBannerInput}
                />
                <label htmlFor="banner-upload" className={styles.btn}>
                    <Button forLabel>
                        <BsUpload />
                    </Button>
                </label>
            </div>

            <div className={styles.content}>
                <textarea
                    type="text"
                    className={styles.title}
                    placeholder="Tiêu đề ..."
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                ></textarea>
                <textarea
                    ref={textArticleRef}
                    type="text"
                    className={styles.article}
                    placeholder="Nội dung ..."
                    value={articleInput}
                    onChange={(e) => setArticleInput(e.target.value)}
                ></textarea>
            </div>

            <div className={styles.options}>
                <input
                    type="file"
                    accept="image/*"
                    id="image-upload"
                    hidden
                    onChange={handleOnChangeImageInput}
                />
                <label htmlFor="image-upload" className={styles.btn}>
                    <Button forLabel>Chèn ảnh</Button>
                </label>
                <Button onClick={handleOnClickCreateButton}>Tạo tin</Button>
            </div>
        </div>
    );
};

export default AdminCreateNewBulletinSection;
