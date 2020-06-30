### Exercicio1 

```
const findFirstRecurringCharacter = (input: string): string | null => {
  const charHashMap: { [index: string]: boolean } = {};
  for (const char of input) {
    if (charHashMap[char] === true) {
      return char;
    }
    charHashMap[char] = true;
  }
  return null;
};
```

A Complexidade é `O(n)`, a complexidade do tempo está relacionada ao tamanho da sting input.

### Exercicio2

```
export const func = (
  source: string,
  comparison: string
): boolean => {
  if (
    comparison.length > source.length + 1 ||
    comparison.length < source.length - 1
  ) {
    return false;
  }
  let commonCharQuantity = 0;

  for (const char of comparison) {
    if (source !== comparison) {
      commonCharQuantity++;
    }
  }
  return (
    commonCharQuantity <= source.length + 1 &&
    commonCharQuantity >= source.length - 1
  );
};
```

A Complexidade é `O(n)`, devido ao tamanho da string comparision, quanto maior for, mas tempo levará. 

### Exercicio3 

```
export const replaceMatrixValue = (
  matrix: number[][],
  rowIndex: number,
  columnIndex: number,
  value: number
): void => {
  if (
    matrix[rowIndex] === undefined ||
    matrix[rowIndex][columnIndex] === undefined
  ) {
    throw new Error("Fora do intervalo da matriz");
  }

  matrix[rowIndex][columnIndex] = value;
};
```

A Complexidade é `O(1)`, pois a função só realiza uma verificação e não denpende do tamanho da entrada. 

### Exercicio4 

```
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
      return true;
    }
  }
  return false;
}
```

A Complexidade é `O(n²)`, pois as verificações do for e do if, que procura o index, dependem do tamananho do array(n). Um loop dentro do outro

### Exercicio5 

Complexidade/exercicio 
O(1) 3 > O(n) 2 = O(n) 1 > O(n²) 4

### Exercicio6 

```
function product(a: number, b: number): number {
  let sum = 0;
  for (let i = 0; i < b; i++) {
    sum += a;
  }
  return sum
}
```

A Complexidade é `O(b)`, pois depende do valor de entrada b.

### Exercicio7 

```
function mod(a: number, b: number): number {
  if (b <= a) {
    return -1;
  }
  let div = a / b;
  return a - div * b;
}
```

A complexidade é `O(1)`, devido ao tempo do algarismo não depender do tamanho da entrada. 

### Exercicio8

```
function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (const value of array) {
    copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  newArray.push(value);
  return newArray;
}
```

A complexidade da function copyArray é `O(n²)`, devido a um for dentro do outro(um loop dentro do outro), uma vez que na função appendToNew tem um for e a complexidade da função appendToNew é `O(n)`, devido ao tamanho do array.