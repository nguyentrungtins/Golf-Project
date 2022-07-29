import { useState } from 'react';
import { generateSignature } from '../../lib/generateSignature';
export function ImageUpload() {
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    async function handleWidgetClick() {
        const widget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'cgv-golf',
                uploadSignature: generateSignature,
                apiKey: '164991728162385',
                resourceType: 'image',
            },
            (error, result) => {
                if (!error && result && result.event === 'success') {
                    console.log(
                        'Done! Here is the image info: ',
                        result.info.secure_url
                    );
                    setIsImageUploaded(true);
                } else if (error) {
                    console.log(error);
                }
            }
        );
        widget.open();
    }

    return (
        <>
            <div>
                <button type="button" onClick={handleWidgetClick}>
                    Upload image
                </button>
            </div>

            {isImageUploaded ? (
                <>
                    <div>Successfully uploaded</div>
                </>
            ) : null}
        </>
    );
}
