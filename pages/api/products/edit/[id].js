import dbConnect from '../../../../lib/dbConnect';
import Product from '../../../../models/Product';
import cloudinary from '../../../../utils/cloudinary';

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

const deleteImage = async (public_ids) => {
    try {
        await cloudinary.api.delete_resources(public_ids);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const handle = async (req, res) => {
    const { method, body } = req;
    const id = req.query.id;
    await dbConnect();

    switch (method) {
        // case 'GET':
        //     try {
        //         const products = await Product.find({});
        //         return res.status(200).json({ success: true, data: products });
        //     } catch (error) {
        //         return res.status(400).json({ success: false });
        //     }
        case 'PUT':
            try {
                const {
                    name,
                    tag,
                    brand,
                    img,
                    mainImg,
                    desc,
                    descImg,
                    techParameter,
                    price,
                    status,
                    slug,
                } = body;
                if (
                    !name ||
                    name.trim() === '' ||
                    !slug ||
                    slug.trim() === '' ||
                    !brand ||
                    slug.trim() === '' ||
                    !tag ||
                    !mainImg ||
                    !price
                ) {
                    return res.status(400).json({
                        success: false,
                        message: 'Dữ liệu không hợp lệ, vui lòng kiểm tra lại!',
                    });
                }
                //Edit new product TO DB
                const data = {
                    name: name.trim(),
                    tag: tag,
                    brand: brand.trim(),
                    price: price,
                    img: img,
                    descImg: descImg,
                    desc: desc,
                    techParameter: techParameter,
                    status: parseInt(status),
                    slug: slug,
                    mainImg: mainImg,
                };

                // console.log('>>> Data: ', data);

                const product = await Product.findByIdAndUpdate(id, data);
                // console.log('>>> bulletin: ', bulletin);
                return res.status(201).json({
                    success: true,
                    data: product,
                    message: 'Sửa sản phẩm thành công',
                });
            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    success: false,
                    message: 'Sửa sản phẩm thất bại',
                });
            }
        case 'DELETE':
            try {
                const { id, img, descImg, mainImg } = body;

                if (!id || !descImg || !img || !mainImg) {
                    return res.status(400).json({
                        success: false,
                        message: 'Dữ liệu không hợp lệ, vui lòng kiểm tra lại!',
                    });
                }
                // DELETE IMAGES
                let img_public_ids = img.map((i) => i.public_id);
                let descImg_public_ids = descImg.map((i) => i.public_id);

                const image_public_ids = [
                    ...img_public_ids,
                    ...descImg_public_ids,
                    mainImg.public_id,
                ];

                console.log('>>> public id: ', image_public_ids);
                await deleteImage(image_public_ids);

                const product = await Product.findByIdAndDelete(id);
                // console.log('>>> bulletin: ', bulletin);
                return res.status(201).json({
                    success: true,
                    data: product,
                    message: 'Xóa sản phẩm thành công',
                });
            } catch (error) {
                console.error(error);
                return res.status(500).json({
                    success: false,
                    message: 'Xóa sản phẩm thất bại',
                });
            }
        default:
            res.status(400).json({ success: false });
            break;
    }
};
export default handle;
