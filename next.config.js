/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kinopoiskapiunofficial.tech',
                pathname: '/**',
            },
        ]
    }

}

module.exports = nextConfig
