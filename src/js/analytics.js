// Vercel Analytics implementation for The Arcades' Studio
// This script injects the Vercel Analytics script only in production environments

(function() {
  // Only load analytics in production (not on localhost)
  const isProduction = 
    !window.location.hostname.includes('localhost') && 
    !window.location.hostname.includes('127.0.0.1');
  
  if (isProduction) {
    // Create and inject the Vercel Analytics script
    const script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.defer = true;
    script.dataset.debug = 'true'; // Enable debug mode temporarily to help troubleshoot
    
    // Add error handling
    script.onerror = function() {
      console.error('Failed to load Vercel Analytics script');
    };
    
    // Add load event to confirm script loaded
    script.onload = function() {
      console.log('Vercel Analytics script loaded successfully');
    };
    
    document.head.appendChild(script);
    
    // Log that we attempted to load analytics
    console.log('Vercel Analytics initialization attempted');
  } else {
    console.log('Vercel Analytics not loaded in development environment');
  }
})();

// Export a dummy function for manual page view tracking
// This isn't needed for basic analytics but provides a consistent API
window.trackPageView = function() {
  if (typeof window.va !== 'undefined') {
    window.va('event', 'page_view');
    console.log('Manual page view tracked');
  }
}; 