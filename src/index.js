module.exports = function check(str, bracketsConfig) {
  let arr = str.split("");
  for (let i = 0; i < bracketsConfig.length; i++) {
    let a = bracketsConfig[i][0];
    let b = bracketsConfig[i][1];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == a && arr[j + 1] == b) {
        arr.splice(j, 2);
        i = -1;
      }
    }
  }
  return !arr.length;
};
