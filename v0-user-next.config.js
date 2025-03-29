
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

module.exports = withBundleAnalyzer({
  // Enabling browser source maps in production for better debugging
  productionBrowserSourceMaps: true,
  
  // Optimizing font loading 
  optimizeFonts: true,
  
  // Compression settings
  compress: true,

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
  },
  
  // Experimental features
  experimental: {
    // These are already enabled in your config
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    
    // Additional optimizations
    optimizeCss: true, // Enables CSS optimization
    optimizePackageImports: [
      'lucide-react', 
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      'date-fns'
    ],
    serverMinification: true,
    turbo: true,
  },
  
  // Add PWA capabilities
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  // },
});
