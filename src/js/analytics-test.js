// Analytics Test Script
// This script helps verify if Vercel Analytics is properly loaded and functioning

document.addEventListener('DOMContentLoaded', function() {
  // Create a test button that will be added to the bottom of the page in development
  const isLocalhost = window.location.hostname.includes('localhost') || 
                      window.location.hostname.includes('127.0.0.1');
  
  if (isLocalhost) {
    const testButton = document.createElement('button');
    testButton.textContent = 'Test Analytics (Dev Only)';
    testButton.style.position = 'fixed';
    testButton.style.bottom = '20px';
    testButton.style.right = '20px';
    testButton.style.padding = '10px 15px';
    testButton.style.backgroundColor = '#4F46E5';
    testButton.style.color = 'white';
    testButton.style.border = 'none';
    testButton.style.borderRadius = '5px';
    testButton.style.cursor = 'pointer';
    testButton.style.zIndex = '9999';
    
    testButton.addEventListener('click', function() {
      checkAnalyticsStatus();
    });
    
    document.body.appendChild(testButton);
  }
  
  // Function to check analytics status
  function checkAnalyticsStatus() {
    const results = document.createElement('div');
    results.style.position = 'fixed';
    results.style.bottom = '80px';
    results.style.right = '20px';
    results.style.width = '300px';
    results.style.padding = '15px';
    results.style.backgroundColor = 'white';
    results.style.border = '1px solid #ccc';
    results.style.borderRadius = '5px';
    results.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    results.style.zIndex = '9999';
    results.style.maxHeight = '400px';
    results.style.overflowY = 'auto';
    
    // Check if Vercel Analytics script exists
    const scriptExists = !!document.querySelector('script[src*="/_vercel/insights/script.js"]');
    
    // Check if the va function exists
    const vaFunctionExists = typeof window.va !== 'undefined';
    
    // Add results
    results.innerHTML = `
      <h3 style="margin-top: 0; margin-bottom: 10px; font-weight: bold;">Analytics Status</h3>
      <ul style="margin: 0; padding-left: 20px;">
        <li style="margin-bottom: 5px;">Script tag exists: <span style="color: ${scriptExists ? 'green' : 'red'};">${scriptExists ? '✓' : '✗'}</span></li>
        <li style="margin-bottom: 5px;">VA function exists: <span style="color: ${vaFunctionExists ? 'green' : 'red'};">${vaFunctionExists ? '✓' : '✗'}</span></li>
        <li style="margin-bottom: 5px;">Hostname: ${window.location.hostname}</li>
        <li style="margin-bottom: 5px;">Path: ${window.location.pathname}</li>
      </ul>
      <p style="margin-top: 10px; font-size: 12px;">Note: Full analytics only work in production.</p>
      <button id="close-analytics-test" style="margin-top: 10px; padding: 5px 10px; background-color: #f3f4f6; border: none; border-radius: 3px; cursor: pointer;">Close</button>
    `;
    
    document.body.appendChild(results);
    
    // Add close button functionality
    document.getElementById('close-analytics-test').addEventListener('click', function() {
      results.remove();
    });
    
    // If va function exists, try to track a test event
    if (vaFunctionExists) {
      try {
        window.va('event', 'test_event', { test_property: 'test_value' });
        const successMsg = document.createElement('p');
        successMsg.textContent = 'Test event sent successfully!';
        successMsg.style.color = 'green';
        successMsg.style.marginTop = '10px';
        results.appendChild(successMsg);
      } catch (e) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = `Error sending test event: ${e.message}`;
        errorMsg.style.color = 'red';
        errorMsg.style.marginTop = '10px';
        results.appendChild(errorMsg);
      }
    }
  }
}); 