// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import cloudinary from '../../utils/cloudinary';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '100mb', // Set desired value here
        },
    },
};

export default async function handler(req, res) {
    try {
        const { src, options } = req.body;
        const uploadResult = await cloudinary.uploader.upload(src, options);
        console.log('>>> Upload result: ', uploadResult);
        return res.status(201).json({
            message: 'upload sucessfully',
            data: {
                url: uploadResult.secure_url,
                width: uploadResult.width,
                height: uploadResult.height,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'upload failed',
        });
    }
}
