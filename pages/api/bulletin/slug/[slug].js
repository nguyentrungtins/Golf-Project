import dbConnect from '../../../../lib/dbConnect';
import Bulletin from '../../../../models/Bulletin';

export default async function handle(req, res) {
    const {
        query: { slug },
        method,
    } = req;

    // console.log(slug);

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const bulletin = await Bulletin.findOne({ slug });
                if (!bulletin) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: bulletin });
            } catch (error) {
                return res.status(400).json({ success: false });
            }

        default:
            return res.status(400).json({
                success: false,
                message: 'Phương thức không được hỗ trợ',
            });
    }
}
