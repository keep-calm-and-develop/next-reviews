/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        // loader: '' or 'custom' // for images stored in cloud
        // unoptimized: true, // use this for static exports only
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            }
        ]
    }
};