const array = ["Peter", "John", "Amy", "Frank"];
const amy = array[2];

function secondMatchesAmy(array) {
  if (array === amy) {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy("Amy"));