const _ = require("lodash");

module.exports = {
  getPaths,
  getPathsToRoot  
}

// todo: try searching all possible paths in non directed graph (create separate graph playground)
// - get shortest path
// - try different algorithms, e.g. shallow search, saving traversed branches, etc
// - try having a plain/board - two dimensional graph 
// - implement basic UI to draw graph and visualise its traversion

function getPaths(startNodeKey, endNodeKey, nodes) {
  const foundPaths = [];
  findPaths(startNodeKey, endNodeKey, nodes, [], foundPaths);
  
  return foundPaths;
}

function findPaths(startNodeKey, endNodeKey, nodes, currentPath = [], foundPaths = []) {
  if (currentPath.includes(startNodeKey)) {
    // circular link - stop
    return;
  }
  
  const path = [...currentPath, startNodeKey]; // new instance so higher level instances are not mutated
  
  if (startNodeKey === endNodeKey) {
    // found it!
    foundPaths.push(path);
    return;    
  }
  
  const node = nodes[startNodeKey];
  for (const linkedNode of node.links) {
    // continue search in linked nodes
    findPaths(linkedNode, endNodeKey, nodes, path, foundPaths);      
  }
}

// ///////////////////////////////////////
// tree graph functions
// //////////////////////////////////////

function getPathsToRoot(nodeKey, nodes) {
  const allPaths = [];
  const path = getPathToRoot(nodeKey, nodes, [], allPaths);
  if (path) {
    allPaths.push(path);
  }
  
  return allPaths;
}

function getPathToRoot(nodeKey, nodes, currentPath = [], allPaths = []) {
    if (currentPath.includes(nodeKey)) {
      // handle circular dependency
      return;
    }
  
    const node = nodes[nodeKey];
    const path = [...currentPath, nodeKey];
    
    if (_.isEmpty(node.parents)) {
      return path;
    }
    
    for (const parentName of node.parents) {
      const fullPath = getPathToRoot(parentName, nodes, path, allPaths);
      if (fullPath) {
        // found a path that ends, save it
        allPaths.push(fullPath);
      }
    }
    
    return;
}
