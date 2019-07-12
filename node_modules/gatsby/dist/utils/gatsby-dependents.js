"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _redux = require("../redux");

var _lodash = require("lodash");

var _readPackageTree = _interopRequireDefault(require("read-package-tree"));

var _util = require("util");

const rptAsync = (0, _util.promisify)(_readPackageTree.default); // Returns [Object] with name and path

module.exports = (0, _lodash.memoize)(async () => {
  const {
    program
  } = _redux.store.getState();

  const allNodeModules = await rptAsync(program.directory, // Include anything that has `gatsby` in its name but not `gatsby` itself
  (node, moduleName) => /gatsby/.test(moduleName) && moduleName !== `gatsby`);
  return allNodeModules.children;
});
//# sourceMappingURL=gatsby-dependents.js.map