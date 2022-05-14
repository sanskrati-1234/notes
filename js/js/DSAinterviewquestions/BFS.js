const root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 20,
    },
    right: {
      val: 7,
    },
  },
  right: {
    val: 12,
  },
};

const BFS = () => {
  let bfsvalues = [];
  let tree = [root];
  let temp = 0;
  while (tree.length > 0) {
    temp = tree.pop();
    bfsvalues.push(temp.val);
    if (temp.left) tree.unshift(temp.left);
    if (temp.right) tree.unshift(temp.right);
  }
  return bfsvalues;
};

console.log(BFS());
