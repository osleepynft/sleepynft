/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        qualities: [25, 50, 75, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.universalprofile.cloud',
            },
            {
                protocol: 'https',
                hostname: '**.ipfs.dweb.link',
            },
            {
                protocol: 'https',
                hostname: 'ipfs.io',
            },
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com',
            },
            {
                protocol: 'https',
                hostname: '**.ipfs.w3s.link',
            },
        ],
        loader: 'custom',
        loaderFile: './app/_lib/ipfsLoader.js',
    },
};


export default nextConfig;
