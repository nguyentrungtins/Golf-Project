/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    api: {
        bodyParser: {
            sizeLimit: '25mb',
        },
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

module.exports = nextConfig;
