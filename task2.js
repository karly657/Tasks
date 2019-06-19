const toCamelCase = str => {
  return str.replace(/([-_]\w)/g, g => g[1].toUpperCase())
};

const kebabStr = "It-is-kebab-case";
const snakeStr = "it_is_snake_case";

console.log(toCamelCase(kebabStr));
console.log(toCamelCase(snakeStr));
