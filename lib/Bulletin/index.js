import dbConnect from '../dbConnect';
import Bulletin from '../../models/Bulletin';

export const getAllBulletins = async () => {
    await dbConnect();
    const bulletins = await Bulletin.find({});
    return JSON.parse(JSON.stringify(bulletins));
};

export const getBulletinBySlug = async (slug) => {
    try {
        const bulletin = await Bulletin.findOne({ slug });
        if (!bulletin) {
            console.error('>>> Can not find any bulletin with slug provided');
            return;
        }
        return JSON.stringify(bulletin);
    } catch (error) {
        console.error(error);
    }
};

export const getBulletinById = async (id) => {
    try {
        const isDevEnv = process.env.NODE_ENV !== 'production'; // development
        const host = isDevEnv
            ? process.env.API_DEV_HOST
            : process.env.API_PRODUCT_HOST;

        // GET BULLETIN FROM API
        const res = await fetch(`${host}/api/bulletin/${id}`);
        const result = await res.json();
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

// export const getBulletinById = async (id) => {
//     try {
//         const bulletin = await Bulletin.findById(id);
//         if (!bulletin) {
//             console.error('>>> Can not find any bulletin with id provided');
//             return;
//         }
//         return JSON.stringify(bulletin);
//     } catch (error) {
//         console.error(error);
//     }
// };
