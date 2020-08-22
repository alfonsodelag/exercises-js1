function exponential(number) {
  for (let number = 6; number <= 20; number++) {
    if (isEven(number)) {
      console.log("the exponential of " + number + " is " + number * number)
    }
  }
}
exponential();

function isEven(number) {
  return number % 2 === 0;
}
