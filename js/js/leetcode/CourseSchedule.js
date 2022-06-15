/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = {};

  let g = {};
  for (let i = 0; i < numCourses; i++) {
    g[i] = [];
  }
  for (let [a, b] of prerequisites) {
    g[a].push(b);
  }
  const vertix = new Array(numCourses).fill(0);
  const dfsv = new Array(numCourses).fill(0);
  for (let i = 0; i < numCourses; i++) {
    if (!vertix[i]) {
      if (dfs(i, g, vertix, dfsv)) return false;
    }
  }
  return true;
};

function dfs(i, g, vertix, dfsv) {
  vertix[i] = 1;
  dfsv[i] = 1;
  for (let n of g[i]) {
    if (!vertix[n]) {
      if (dfs(n, g, vertix, dfsv)) return true;
    } else if (dfsv[n]) {
      return true;
    }
  }
  dfsv[i] = 0;
  return false;
}
