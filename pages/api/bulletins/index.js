import cloudinary from '../../../utils/cloudinary';

import dbConnect from '../../../lib/dbConnect';
import Bulletin from '../../../models/Bulletin';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100mb', // Set desired value here
        },
    },
};

const uploadImage = async (bodyData) => {
    try {
        const { src, options } = bodyData;
        const uploadResult = await cloudinary.uploader.upload(src, options);
        // console.log(uploadResult);
        return {
            url: uploadResult.secure_url,
            width: uploadResult.width,
            height: uploadResult.height,
            public_id: uploadResult.public_id,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};

const handle = async (req, res) => {
    const { method, body } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const bulletins = await Bulletin.find({});
                return res.status(200).json({ success: true, data: bulletins });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
        case 'POST':
            const { title, article, banner, images, slug } = body;
            if (
                !title ||
                title.trim() === '' ||
                !article ||
                article.trim() === '' ||
                !banner ||
                !banner.src ||
                banner.src === '' ||
                !slug ||
                slug.trim() === ''
            ) {
                return res.status(500).json({
                    success: false,
                    message: 'Dữ liệu không hợp lệ',
                });
            }
            try {
                // UPLOAD BANNER IMAGE
                const uploadBannerData = {
                    src: banner.src,
                    options: {
                        folder: 'bulletin',
                        upload_preset: 'hdvpsezy',
                        resource_type: 'image',
                    },
                };

                const bannerUploadRes = await uploadImage(uploadBannerData);
                // const bannerUploadRes = await fetch('/api/upload', {
                //     method: 'POST',
                //     headers: {
                //         'Content-type': 'application/json',
                //     },
                //     body: JSON.stringify(uploadBannerData),
                // });
                // const bannerUploadResult = await bannerUploadRes.json();
                if (!bannerUploadRes) {
                    return res
                        .status(500)
                        .json({ success: false, message: 'Lỗi upload ảnh' });
                }

                // UPLOAD ARTICLE IMAGES
                let newImages = [];
                await Promise.all(
                    images.map(async (image) => {
                        const uploadImageData = {
                            src: image.src,
                            options: {
                                folder: 'bulletin',
                                upload_preset: 'hdvpsezy',
                                resource_type: 'image',
                            },
                        };
                        const imageUploadRes = await uploadImage(
                            uploadImageData
                        );
                        if (!imageUploadRes) {
                            return res.status(500).json({
                                success: false,
                                message: 'Lỗi upload ảnh',
                            });
                        }
                        newImages = [
                            ...newImages,
                            { ...imageUploadRes, name: image.name },
                        ];
                    })
                );

                // CREATE NEW BULLETIN TO DB
                const data = {
                    title: title.trim(),
                    article: article.trim(),
                    banner: bannerUploadRes,
                    images: newImages,
                    slug: slug.trim(),
                };
                // console.log('>>> Data: ', data);

                const bulletin = await Bulletin.create(data);
                // console.log('>>> bulletin: ', bulletin);
                return res.status(201).json({
                    success: true,
                    data: bulletin,
                    message: 'Tạo tin mới thành công',
                });
            } catch (error) {
                console.error(error);
                return res
                    .status(500)
                    .json({ success: false, message: 'Tạo tin mới thất bại' });
            }
    }
};

export default handle;
