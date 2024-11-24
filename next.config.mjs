/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ensures the use of the latest App Router (if you're using it)
    experimental: {
      appDir: true, // Enables the `/app` directory if you're using the new App Router
    },
    
    // Output configuration
    output: 'standalone', // Ensures compatibility with Vercel deployments
  };
  
  export default nextConfig;
  