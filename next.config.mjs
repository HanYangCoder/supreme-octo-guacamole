/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '',
            pathname: '/supreme-octo-guacamole-wp-site/wp-content/uploads/**',
        },
        ],
    },
};

export default nextConfig;
