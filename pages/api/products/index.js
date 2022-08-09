import cloudinary from '../../../utils/cloudinary';

import dbConnect from '../../../lib/dbConnect';
import Product from '../../../models/Product';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100mb', // Set desired value here
        },
    },
};

const uploadImage = async (bodyData) => {
    const { src, options } = bodyData;
    const uploadResult = await cloudinary.uploader.upload(src, options);
    return {
        url: uploadResult.secure_url,
        width: uploadResult.width,
        height: uploadResult.height,
        public_id: uploadResult.public_id,
    };
};

const handle = async (req, res) => {
    const { method, body } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const products = await Product.find({});
                return res.status(200).json({ success: true, data: products });
            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            const {
                name,
                tag,
                brand,
                img,
                desc,
                descImg,
                techParameter,
                price,
                status,
            } = body;
            if (
                !name ||
                name.trim() === '' ||
                !brand ||
                !tag ||
                img.src === ''
            ) {
                return res.status(500).json({
                    success: false,
                    message: 'Dữ liệu không hợp lệ',
                });
            }
            try {
                // UPLOAD ARTICLE IMAGES

                let newImages = [];
                await Promise.all(
                    img.map(async (image) => {
                        const uploadImageData = {
                            src: image.src,
                            options: {
                                folder: 'products',
                                upload_preset: 'hdvpsezy',
                                resource_type: 'image',
                            },
                        };
                        const { public_id, url, width, height } =
                            await uploadImage(uploadImageData);
                        newImages = [
                            ...newImages,
                            {
                                name: image.name,
                                url,
                                width,
                                height,
                                public_id,
                            },
                        ];
                    })
                );

                let newDescImg = [];
                await Promise.all(
                    descImg.map(async (image) => {
                        const uploadImageData = {
                            src: image.src,
                            options: {
                                folder: 'products',
                                upload_preset: 'hdvpsezy',
                                resource_type: 'image',
                            },
                        };
                        const { public_id, url, width, height } =
                            await uploadImage(uploadImageData);
                        newDescImg = [
                            ...newDescImg,
                            {
                                name: image.name,
                                url,
                                width,
                                height,
                                public_id,
                            },
                        ];
                    })
                );

                // CREATE NEW BULLETIN TO DB
                const data = {
                    name: name.trim(),
                    tag: tag,
                    brand: brand.trim(),
                    price: price,
                    img: newImages,
                    descImg: newDescImg,
                    desc: desc.trim(),
                    techParameter: techParameter,
                    status: status,
                };

                // console.log('>>> Data: ', data);

                const product = await Product.create(data);
                // console.log('>>> bulletin: ', bulletin);
                return res.status(201).json({
                    success: true,
                    data: product,
                    message: 'Tạo sản phẩm mới thành công',
                });
            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    success: false,
                    message: 'Tạo sản phẩm mới thất bại',
                });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
};

export default handle;
