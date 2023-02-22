module.exports = function reverse (n) {
  let ss;
  ss = n.toString();
  ss = [...ss].reverse().join("");
  return parseInt(ss);

}
