// Minimal Vercel Analytics implementation
// Only loads in production environments with no storage access

(function() {
  // Only load analytics in production (not on localhost)
  if (!window.location.hostname.includes('localhost') && 
      !window.location.hostname.includes('127.0.0.1')) {
    
    // Simple script injection
    const script = document.createElement('script');
    script.src = '/_vercel/insights/script.js';
    script.async = true;
    document.head.appendChild(script);
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