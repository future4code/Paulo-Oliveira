// EXERCÍCIO 2

const matOperation = process.argv[2];
const firstValue = process.argv[3];
const secondValue = process.argv[4];

let resultOperation;

switch (matOperation) {
    case "add":
    resultOperation = Number(firstValue) + Number(secondValue);
    break;
    case "sub":
    resultOperation = Number(firstValue) - Number(secondValue);
    break;
    case "mult":
    resultOperation = Number(firstValue) * Number(secondValue);
    break;
    case "div":
    resultOperation = Number(firstValue) / Number(secondValue);
}

console.log(`Resultado: ${resultOperation}`);