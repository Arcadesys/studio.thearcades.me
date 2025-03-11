// Minimal Analytics Test Script
// Only shows a message in the console in development environments

(function() {
  // Only run in development
  if (window.location.hostname.includes('localhost') || 
      window.location.hostname.includes('127.0.0.1')) {
    
    console.log('Analytics test script loaded in development environment');
    console.log('Analytics will only be active in production');
  }
})(); 