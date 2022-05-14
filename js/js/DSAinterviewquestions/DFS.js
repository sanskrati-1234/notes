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

const DFS = () => {
  let dfsValues = [];
  let tree = [root];
  let temp;
  while (tree.length > 0) {
    temp = tree.shift();
    dfsValues.push(temp.val);
    if (temp.right) tree.unshift(temp.right);
    if (temp.left) tree.unshift(temp.left);
  }
  return dfsValues;
};
console.log(DFS());
