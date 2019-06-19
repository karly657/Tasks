const solution = str => {
  if (str.length % 2 !== 0) {
    str += "_";
  }
  return str.split(/(..)/).filter(char => char !== "");
};

console.log(solution("abcdef"));
console.log(solution("abc"));
