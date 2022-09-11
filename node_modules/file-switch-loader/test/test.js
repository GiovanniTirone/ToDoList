const assert = require('assert');
const path = require('path');
const fs = require('fs');
const loader = require('../index');

const testFilePath = path.resolve('./test/testFile.2.js');

const getModuleRequireFromTemplate = module =>
  `module.exports = require("-!${module}");`;

describe('file-switcher-loader', () => {
  describe('pitch method', () => {
    it('should not rewrite for node_modules', () => {
      const resourcePath = 'node_modules/crazyModule';
      const requestedResource = 'crazyModule';
      const thisContext = {resourcePath};

      assert.equal(
        loader.pitch.apply(thisContext, [requestedResource, '', {}]),
        getModuleRequireFromTemplate(requestedResource),
      );
    });
    it('should not rewrite if no version was specified', () => {
      const resourcePath = 'crazyModule';
      const requestedResource = 'crazyModule';
      const query = {};
      const thisContext = {resourcePath, query: {}};

      assert.equal(
        loader.pitch.apply(thisContext, [requestedResource, '', {}]),
        getModuleRequireFromTemplate(requestedResource),
      );
    });
    describe('data object', () => {
      it('should have an empty newPath if no file for rewrite is found', () => {
        const resourcePath = path.resolve('./test/testFile.js');
        const requestedResource = 'testFile.js';
        const thisContext = {resourcePath, query: {}};
        const data = {};

        loader.pitch.apply(thisContext, [requestedResource, '', data]);

        assert.equal(data.newPath, undefined);
      });
      it('should have a newPath set if a file for rewrite is found', () => {
        const resourcePath = path.resolve('./test/testFile.js');
        const requestedResource = 'testFile.js';
        const thisContext = {resourcePath, query: {version: 2}};
        const data = {};

        loader.pitch.apply(thisContext, [requestedResource, '', data]);

        assert.equal(data.newPath, testFilePath);
      });
    });
  });
  describe('main method', () => {
    it('should return unchanged content if no new path is supplied', () => {
      const data = {};
      const thisContext = {data};
      const content = 'const hello = 4;';
      const loaderOutput = loader.call(thisContext, [content]);

      assert.equal(loaderOutput, content);
    });
    it('should return changed content if new path is supplied', () => {
      const data = {newPath: testFilePath};
      const thisContext = {data};
      const content = 'const hello = 4;';
      const loaderOutput = loader.apply(thisContext, [content]);
      const newContent = fs.readFileSync(testFilePath, 'utf8');

      assert.equal(loaderOutput, newContent);
    });
  });
});
