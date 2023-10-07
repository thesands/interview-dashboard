import './PracticeProblems.css';
import BikeShop from './problems/bike-shop/BikeShop';
import ArrayToObject from './problems/array-to-object/ArrayToObject';

function PracticeProblems() {
  return (
    <div className="practice-problems">
      <BikeShop />
      <ArrayToObject />
    </div>
  );
}

export default PracticeProblems;

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {
  // Determine if the tree is a valid binary search tree
  const nodeStack = [];
  nodeStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  while (nodeStack.length) {
    const { node, lowerBound, upperBound } = nodeStack.pop();

    if (node.value <= lowerBound || node.value >= upperBound) return false;

    if (node.left) {
      nodeStack.push({
        node: node.left,
        lowerBound: lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {
      nodeStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound: upperBound,
      });
    }
  }

  return true;
}

function findSecondLargest(treeRoot) {
  // Find the second largest item in the binary search tree

  if (!treeRoot) {
    throw new Error('no nodes');
  }

  if (!treeRoot.right && !treeRoot.left) {
    throw new Error('need two nodes');
  }

  // second largest would be node before the largest
  let currentNode = treeRoot;

  while (currentNode) {
    if (currentNode.left && !currentNode.right) {
      return findLargest(currentNode.left);
    }

    if (
      currentNode.right &&
      !currentNode.right.left &&
      !currentNode.right.right
    ) {
      return currentNode.value;
    }

    currentNode = currentNode.right;
  }
}

// largest item would be all the way to the right
function findLargest(node) {
  let currentNode = node;

  while (currentNode) {
    if (!currentNode.right) {
      return currentNode.value;
    }
    currentNode = currentNode.right;
  }
}

function getPermutations(string) {
  // Generate all permutations of the input string
  if (string.length <= 1) {
    return new Set([string]);
  }

  const allCharsMinusLast = string.slice(0, -1);
  const lastChar = string[string.length - 1];

  const permsOfAllCharsMinusLast = getPermutations(allCharsMinusLast);

  const perms = new Set();
  permsOfAllCharsMinusLast.forEach((perm) => {
    for (let i = 0; i <= allCharsMinusLast.length; i++) {
      const newPerm = perm.slice(0, i) + lastChar + perm.slice(i);
      perms.add(newPerm);
    }
  });

  return perms;
}
