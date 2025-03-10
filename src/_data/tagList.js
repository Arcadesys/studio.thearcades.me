module.exports = function(collections) {
  let tagSet = new Set();
  
  for (const collectionName in collections) {
    const collection = collections[collectionName];
    
    if (Array.isArray(collection)) {
      collection.forEach(item => {
        if ("tags" in item.data) {
          let tags = item.data.tags;
          if (typeof tags === "string") {
            tags = [tags];
          }
          
          tags = tags.filter(tag => {
            return !["all", "nav", "post", "posts"].includes(tag);
          });
          
          for (const tag of tags) {
            tagSet.add(tag);
          }
        }
      });
    }
  }
  
  return [...tagSet].sort();
}; 