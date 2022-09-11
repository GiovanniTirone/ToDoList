const fs = require('fs');
const path = require('path');

module.exports = function(content) {
  if (this.data.newPath) {
    content = fs.readFileSync(this.data.newPath, 'utf8');
  }
  return content;
};

module.exports.pitch = function(remainingRequest, precedingRequest, data) {
  if (this.resourcePath.includes('node_modules') || !this.query.version) {
    return (
      'module.exports = require(' +
      JSON.stringify('-!' + remainingRequest) +
      ');'
    );
  }

  const version = this.query.version;
  const parsedResource = path.parse(this.resourcePath);
  const newPath = `${parsedResource.dir}/${parsedResource.name}.${version}${parsedResource.ext}`;

  if (fs.existsSync(newPath)) {
    data.newPath = newPath;
  }
};
