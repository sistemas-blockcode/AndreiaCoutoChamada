  /** @type {import('next').NextConfig} */
  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
        },
        
      ],
    },
    eslint: {
      ignoreDuringBuilds: true, // Ignora o ESLint durante o build
    },
  };

  export default nextConfig;
