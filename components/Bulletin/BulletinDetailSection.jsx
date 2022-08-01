import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BulletinDetailSection.module.scss';
import Button from '../Button';
import { BiArrowBack } from 'react-icons/bi';

const BulletinDetailSection = ({ bulletin }) => {
    const articleRef = useRef();

    // SET CONTENT OF ARTICLE
    useEffect(() => {
        let articleContent = '';

        const splitArticle = bulletin.article
            .split('\n')
            .filter((item) => item !== '');
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
                articleContent += `
                    <div>
                        <Image
                            src="${image.url}"
                            alt="image"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                `;
            } else {
                articleContent += `<p>${item}</p>`;
            }
        });

        articleRef.current.innerHTML = articleContent;
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.actions}>
                <Link href="/bulletins">
                    <Button forIcon>
                        <BiArrowBack />
                    </Button>
                </Link>
            </div>
            <h1 className={styles.title}>{bulletin.title}</h1>
            <p className={styles.published}>
                <span>
                    {new Date(bulletin.updatedAt).toISOString().slice(0, 10)}
                </span>
            </p>
            <div className={styles.banner}>
                <Image
                    src={bulletin.banner.url}
                    alt="image"
                    width="100%"
                    height="100%"
                    layout="responsive"
                />
            </div>
            <div className={styles.article} ref={articleRef}></div>
        </div>
    );
};

export default BulletinDetailSection;
