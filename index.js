var calculate = {
  add(a, b) {
    if (!a || !b) {
      if (a !== 0 && b !== 0) {
        console.info("number is empty");
      }
    }
    return a + b;
  },
};
module.exports = calculate;
