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
  },
  
  // Limit array to first n items
  limit: function(array, limit) {
    return array.slice(0, limit);
  },
  
  // Find posts related by tags
  relatedByTags: function(posts, currentTags) {
    if (!currentTags || !Array.isArray(currentTags)) return [];
    
    return posts.filter(post => {
      if (!post.data.tags || !Array.isArray(post.data.tags)) return false;
      
      return post.data.tags.some(tag => currentTags.includes(tag));
    });
  }
}; 