const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot
  }

  add(data) {

    this.treeRoot = addNode(this.treeRoot, data);

    function addNode(node, data) {
      if (!node) return new Node(data)
      if (node.data === data) return node

      if (data > node.data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }

      return node;
    }
  }

  has(data) {
    return hasNode(this.treeRoot, data);

    function hasNode(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      return (data < node.data) ? (hasNode(node.left, data)) : (hasNode(node.right, data));
    }

  }

  find(data) {

    return findNode(this.treeRoot, data);

    function findNode(node, data) {

      if (!node) return null;
      if (node.data === data) return node;


      return node.data > data ? (findNode(node.left, data)) : (findNode(node.right, data))

      // return element.data > data ? findElement(element.left, data) : findElement(element.right, data)

    }

  }



  min() {
    if (!this.treeRoot) return

    let nodeMin = this.treeRoot;
    while (nodeMin.left) {
      nodeMin = nodeMin.left;
    }
    return nodeMin.data;
  }

  max() {
    if (!this.treeRoot) return

    let nodeMax = this.treeRoot;
    while (nodeMax.right) {
      nodeMax = nodeMax.right;
    }
    return nodeMax.data;
  }

  remove(data) {
    this.treeRoot = removeNode(this.treeRoot, data)

    function removeNode(node, data) {
      if (!node) return null;
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let min = node.right;

        while (min.left) {
          min = min.left;
        }

        node.data = min.data;
        node.right = removeNode(node.right, min.data);

        return node;
      }
    }


  }
}

module.exports = {
  BinarySearchTree
};