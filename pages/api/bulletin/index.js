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
    const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const result = await response.json();
    const url = await result.url;
    return url;
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
                title === '' ||
                !article ||
                article === '' ||
                !banner ||
                !banner.src ||
                banner.src === '' ||
                !slug ||
                slug === ''
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
                    },
                };

                const bannerUrl = await uploadImage(uploadBannerData);

                // UPLOAD ARTICLE IMAGES
                let newImages = [];
                await Promise.all(
                    images.map(async (image) => {
                        const uploadImageData = {
                            src: image.src,
                            options: {
                                folder: 'bulletin',
                                upload_preset: 'hdvpsezy',
                            },
                        };
                        const imageUrl = await uploadImage(uploadImageData);
                        newImages = [
                            ...newImages,
                            {
                                name: image.name,
                                url: imageUrl,
                            },
                        ];
                    })
                );

                // CREATE NEW BULLETIN TO DB
                const data = {
                    title: title.trim(),
                    article: article.trim(),
                    banner: {
                        url: bannerUrl,
                    },
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
