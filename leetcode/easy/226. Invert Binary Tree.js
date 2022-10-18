/**
 * 226. Invert Binary Tree
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let invertTree = function(root) {
    if (root == null) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    root.right = temp;

    invertTree(root.right);
    invertTree(root.left);

    return root;
};

// DFS
function invertTree(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }

    return root;
}

// BFS
function invertTree(root) {
    const queue = [root];

    while (queue.length) {
        const n = queue.shift();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            queue.push(n.left, n.right);
        }
    }

    return root;
}
