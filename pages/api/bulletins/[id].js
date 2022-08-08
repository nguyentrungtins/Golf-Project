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

const deleteImage = async (public_ids) => {
    try {
        await cloudinary.api.delete_resources(public_ids);
        // console.log(deleteResult);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
};

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const bulletin = await Bulletin.findById(id);
                if (!bulletin) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: bulletin });
            } catch (error) {
                return res.status(400).json({ success: false });
            }

        case 'PUT':
            try {
                const data = req.body;
                if (
                    !data.title ||
                    data.title === '' ||
                    !data.article ||
                    data.article === '' ||
                    !data.slug ||
                    data.slug === ''
                ) {
                    return res.status(500).json({
                        success: false,
                        message: 'Dữ liệu không hợp lệ',
                    });
                }

                // CHECK BANNER IS CHANGED
                // IF BANNER HAS SRC PROPERTY -> BANNER CHANGED -> UPLOAD NEW BANNER
                if (data.banner.src) {
                    // UPLOAD BANNER IMAGE
                    const uploadBannerRes = await uploadImage({
                        src: data.banner.src,
                        options: {
                            folder: 'bulletin',
                            upload_preset: 'hdvpsezy',
                            resource_type: 'image',
                        },
                    });
                    data.banner.src = null;
                    data.banner.url = uploadBannerRes.url;
                    data.banner.width = uploadBannerRes.width;
                    data.banner.height = uploadBannerRes.height;
                }

                // CHECK ARTICLE IMAGES ARE CHANGED
                await Promise.all(
                    data.images.map(async (image) => {
                        // IF IMAGE HAS SRC PROPERTY -> NEW IMAGE -> UPLOAD NEW IMAGE
                        if (image.src) {
                            const uploadImageRes = await uploadImage({
                                src: image.src,
                                options: {
                                    folder: 'bulletin',
                                    upload_preset: 'hdvpsezy',
                                },
                            });
                            data.images.splice(data.images.indexOf(image), 1);
                            data.images.push({
                                name: image.name,
                                ...uploadImageRes,
                            });
                        }
                    })
                );

                const bulletin = await Bulletin.findByIdAndUpdate(id, data, {
                    new: true,
                    runValidators: true,
                });
                if (!bulletin) {
                    return res.status(400).json({
                        success: false,
                        message: 'Cập nhật tin thất bại',
                    });
                }
                return res.status(200).json({
                    success: true,
                    data: bulletin,
                    message: 'Cập nhật tin thành công',
                });
            } catch (error) {
                return res
                    .status(400)
                    .json({ success: false, message: 'Cập nhật tin thất bại' });
            }

        case 'DELETE':
            try {
                const data = req.body;
                if (
                    !data.title ||
                    data.title === '' ||
                    !data.article ||
                    data.article === '' ||
                    !data.slug ||
                    data.slug === ''
                ) {
                    return res.status(500).json({
                        success: false,
                        message: 'Dữ liệu không hợp lệ',
                    });
                }

                // DELETE IMAGES
                let image_public_ids = data.images.map(
                    (image) => image.public_id
                );

                if (data.banner.url) {
                    image_public_ids = [
                        ...image_public_ids,
                        data.banner.public_id,
                    ];
                }

                await deleteImage(image_public_ids);

                // DELETE BULLETIN
                const deletedBulletin = await Bulletin.deleteOne({ _id: id });
                if (!deletedBulletin) {
                    return res
                        .status(400)
                        .json({ success: false, message: 'Xóa tin thất bại' });
                }
                return res
                    .status(200)
                    .json({ success: true, message: 'Xóa tin thành công' });
            } catch (error) {
                res.status(400).json({ success: false });
            }

        default:
            return res.status(400).json({
                success: false,
                message: 'Phương thức không được hỗ trợ',
            });
    }
}
