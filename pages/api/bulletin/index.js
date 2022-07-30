import dbConnect from '../../../lib/dbConnect';
import Bulletin from '../../../models/Bulletin';

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
    const { title, article, banner, images } = body;
    // console.log('>>> Images: ', images);
    // console.log('>>> Method: ', method);
    // console.log('>>> Body: ', body);
    // console.log(article);
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
            // console.log('go here ...');
            // break;
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
                    title,
                    article,
                    banner: {
                        url: bannerUrl,
                    },
                    images: newImages,
                };
                // console.log('>>> Data: ', data);
                const bulletin = await Bulletin.create(data);
                // console.log('>>> bulletin: ', bulletin);
                return res.status(201).json({ success: true, data: bulletin });
            } catch (error) {
                console.error(error);
                return res.status(500).json({ success: false });
            }
    }
};

export default handle;
