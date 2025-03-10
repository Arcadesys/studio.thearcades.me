module.exports = {
  // Format date as ISO string (for datetime attribute)
  dateIso: function(date) {
    return date.toISOString();
  },
  
  // Format date as readable string (Mar 10, 2023)
  dateReadable: function(date) {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}; 