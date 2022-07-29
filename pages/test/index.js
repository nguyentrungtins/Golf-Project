import { useState } from 'react';

const TestUploadPage = () => {
    const [imageSrc, setImageSrc] = useState(''); // BASE 64 ENCODED IMAGE

    const handleOnChangeInput = (e) => {
        const file = e.target.files[0];

        // PREVIEW FILE
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageSrc(reader.result);
        };
    };

    const handleOnSubmitForm = async (e) => {
        e.preventDefault();
        if (!imageSrc) return;

        // UPLOAD IMAGE
        const data = {
            src: imageSrc,
            options: {
                folder: 'news',
            },
        };

        try {
            await fetch('/api/upload', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json',
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: 300,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: `url("${imageSrc}")`,
                }}
            ></div>
            <form method="POST" onSubmit={handleOnSubmitForm}>
                <input
                    id="image-upload"
                    type="file"
                    name="image"
                    onChange={handleOnChangeInput}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default TestUploadPage;
