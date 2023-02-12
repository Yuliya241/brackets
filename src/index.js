module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let opened = bracketsConfig[j][0];
      let closed = bracketsConfig[j][1];
      let current = str[i];
      let last = stack[stack.length - 1];
      if (last == opened && current == closed) {
        stack.pop();
      } else if (current == opened) {
          stack.push(current);
        } else if (stack.length == 0 && current == closed) {
          return false;
        }  
      } 
    }
  return stack.length === 0
} 

