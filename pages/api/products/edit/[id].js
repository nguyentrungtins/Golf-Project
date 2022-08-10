import dbConnect from '../../../../lib/dbConnect';
import Product from '../../../../models/Product';

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
                slug,
            } = body;
            if (
                !name ||
                name.trim() === '' ||
                !slug ||
                slug.trim() === '' ||
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
        default:
            res.status(400).json({ success: false });
            break;
    }
};
export default handle;
