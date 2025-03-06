// Returns the sum of a and b.
function add(a, b) {
  return a + b;
}

// Returns the difference of a and b.
function subtract(a, b) {
  return a - b;
}

// Returns the product of a and b.
function multiply(a, b) {
  return a * b;
}

// Returns the quotient of a divided by b.
function divide(a, b) {
  return a / b;
}

// Returns n incremented by 1.
function increment(n) {
  return n + 1;
}

// Returns n decremented by 1.
function decrement(n) {
  return n - 1;
}

// Parses n as an integer (base 10) and returns the parsed integer.
function makeInt(n) {
  return parseInt(n, 10);
}

// Parses n as a floating point number and returns it.
function preserveDecimal(n) {
  return parseFloat(n);
}

// Export the functions for testing (Node.js environment)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    increment,
    decrement,
    makeInt,
    preserveDecimal,
  };
}
