module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closeBrackets = [];

bracketsConfig.forEach((pair) => {
  openBrackets.push(pair[0]);
  closeBrackets.push(pair[1]);
});

let stack = [];

for (const char of str) {
  if (openBrackets.includes(char) && closeBrackets.includes(char)) {
    if (stack[stack.length - 1] === char) {
      stack.splice(stack.length - 1, 1);
    } else {
      stack.push(char);
    }
  } else if (openBrackets.includes(char)) {
    stack.push(char);
  } else if (closeBrackets.includes(char)) {
    const close = char;
    const bracketsIndex = closeBrackets.indexOf(close);
    const open = openBrackets[bracketsIndex];

    if (stack[stack.length - 1] === open) {
      stack.splice(stack.length - 1, 1);
    } else {
      stack.push(close);
    }
  }
}

return !stack.length;
}
