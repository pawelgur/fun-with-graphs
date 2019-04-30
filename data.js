module.exports = {
  tree: {  // graph with directions
    "a": {
      key: "a",
      parents: [],
      children: ["b", "e", "f", "i"]
    },
    "b": {
      key: "b",
      parents: ["a", "i"],
      children: ["c", "d"]
    },
    "c": {
      key: "c",
      parents: ["b", "c"],
      children: []
    },
    "d": {
      key: "d",
      parents: ["b", "e", "j"],
      children: []
    },
    "e": {
      key: "e",
      parents: ["a", "f"],
      children: ["d"]
    },
    "f": {
      key: "f",
      parents: ["a"],
      children: ["e", "j"]
    },
    "j": {
      key: "j",
      parents: ["f"],
      children: ["d"]
    },
    "i": {
      key: "i",
      parents: ["a"],
      children: ["b"]
    }
  },
  
  plainGraph: {
    "a": {
      key: "a",
      links: ["b", "e", "f", "i"]
    },
    "b": {
      key: "b",
      links: ["a", "i", "c", "d"]
    },
    "c": {
      key: "c",
      links: ["b", "c"]
    },
    "d": {
      key: "d",
      links: ["b", "e", "j"]
    },
    "e": {
      key: "e",
      links: ["a", "f", "d"]
    },
    "f": {
      key: "f",
      links: ["a", "e", "j"]
    },
    "j": {
      key: "j",
      links: ["f", "d"]
    },
    "i": {
      key: "i",
      links: ["a", "b"]
    }
  }
};