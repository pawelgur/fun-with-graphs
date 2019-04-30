const argv = require('minimist')(process.argv.slice(2));

const data = require("./data.js");
const traverser = require("./graph-traverser.js");

const startNode = argv.s || "a";
const endNode = argv.e || "b";


const paths = traverser.getPaths(startNode, endNode, data.plainGraph);

prettyJSON(paths);




function prettyJSON(obj) {
    console.log(JSON.stringify(obj, null, 2));
}
