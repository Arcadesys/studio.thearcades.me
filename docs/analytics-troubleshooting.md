# Vercel Analytics Troubleshooting Guide

This guide will help you troubleshoot issues with Vercel Analytics on your site.

## Implementation Overview

The site uses Vercel Analytics with the following implementation:

1. The `@vercel/analytics` package is installed via npm
2. A custom script in `src/js/analytics.js` dynamically loads the Vercel Analytics script
3. A test script in `src/js/analytics-test.js` helps verify the implementation

## Common Issues and Solutions

### No Data Showing in Dashboard

If you're not seeing data in your Vercel Analytics dashboard:

1. **Verify Script Loading**: Check your browser's network tab to confirm that `/_vercel/insights/script.js` is being loaded. If it's not:
   - Make sure you're viewing the production site (analytics won't work on localhost)
   - Check for any network errors when loading the script
   - Verify that your site is deployed to Vercel

2. **Check for Content Blockers**: Ad blockers and privacy extensions can block analytics scripts. Try:
   - Disabling any ad blockers or privacy extensions
   - Testing in an incognito/private window
   - Testing on a different browser

3. **Verify Proper Implementation**:
   - Make sure `analytics.js` is being loaded in the head of your HTML
   - Check browser console for any JavaScript errors

4. **Check Vercel Configuration**:
   - Ensure Web Analytics is enabled in your Vercel project settings
   - Verify your project is on a plan that includes Analytics

### Using the Analytics Test Tool

The site includes a built-in analytics test tool that can help diagnose issues:

1. In development (localhost), a "Test Analytics" button appears in the bottom right corner
2. Click this button to see the current status of analytics on your page
3. The tool will show:
   - Whether the Vercel Analytics script is present
   - Whether the `va()` function is available
   - Your current hostname and path

Note that full analytics functionality only works in production, but the test tool can help verify your implementation.

### Debugging in Production

To debug analytics in production:

1. Open your browser's developer tools (F12 or right-click > Inspect)
2. Go to the Console tab
3. Look for messages from the analytics script:
   - "Vercel Analytics initialization attempted" - Script is trying to load
   - "Vercel Analytics script loaded successfully" - Script loaded correctly
   - Any error messages related to analytics

4. Check the Network tab for requests to `/_vercel/insights/script.js` and any subsequent beacon requests

## Manual Testing

You can manually test analytics by adding this code to your browser console:

```javascript
// Check if va function exists
console.log('VA function exists:', typeof window.va !== 'undefined');

// Try to send a test event
if (typeof window.va !== 'undefined') {
  window.va('event', 'manual_test', { source: 'console' });
  console.log('Test event sent');
}
```

## Still Having Issues?

If you're still experiencing problems:

1. Make sure you've deployed your latest changes to Vercel
2. Allow 24-48 hours for data to appear in the dashboard
3. Try navigating between multiple pages on your site
4. Check the Vercel status page for any service disruptions
5. Contact Vercel support if problems persist 