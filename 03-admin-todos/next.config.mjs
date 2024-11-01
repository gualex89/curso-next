/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailus.io',
                pathname: '/**',  // Permite todas las rutas dentro de este dominio
            },
        ]
    }
};

export default nextConfig;
