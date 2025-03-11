// Vercel Analytics implementation for The Arcades' Studio
// This script injects the Vercel Analytics script only in production environments

(function() {
  try {
    // Only load analytics in production (not on localhost)
    const isProduction = 
      !window.location.hostname.includes('localhost') && 
      !window.location.hostname.includes('127.0.0.1');
    
    if (isProduction) {
      // Create and inject the Vercel Analytics script
      const script = document.createElement('script');
      script.src = '/_vercel/insights/script.js';
      script.defer = true;
      script.async = true; // Make it async to not block rendering
      
      // Add error handling
      script.onerror = function() {
        console.error('Failed to load Vercel Analytics script');
      };
      
      // Add load event to confirm script loaded
      script.onload = function() {
        console.log('Vercel Analytics script loaded successfully');
      };
      
      // Append to head with a small delay to ensure it doesn't interfere with page rendering
      setTimeout(function() {
        try {
          document.head.appendChild(script);
          console.log('Vercel Analytics initialization attempted');
        } catch (e) {
          console.error('Error appending Vercel Analytics script:', e);
        }
      }, 1000);
    } else {
      console.log('Vercel Analytics not loaded in development environment');
    }
  } catch (e) {
    // Catch any errors to prevent breaking the page
    console.error('Error initializing Vercel Analytics:', e);
  }
})();

// Export a dummy function for manual page view tracking
// This isn't needed for basic analytics but provides a consistent API
window.trackPageView = function() {
  try {
    if (typeof window.va !== 'undefined') {
      window.va('event', 'page_view');
      console.log('Manual page view tracked');
    }
  } catch (e) {
    console.error('Error tracking page view:', e);
  }
}; 