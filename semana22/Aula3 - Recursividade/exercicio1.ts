//a

const printNumbersInt = (n: number) => {
  if (n >= 0) {
    printNumbersInt(n - 1);
    console.log(n);
  }
};

printNumbersInt(6)

const printNumbersDesc = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersDesc(n - 1);
  }
};

printNumbersDesc(6)