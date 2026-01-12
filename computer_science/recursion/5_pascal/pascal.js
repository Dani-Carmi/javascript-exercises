const pascal = function (rowNum) {
  if (rowNum === 1) return [1];

  let currentRow = [1];

  const previousRow = pascal(rowNum - 1);
  previousRow.forEach((number, i) => {
    const rightNum = previousRow[i + 1] ?? 0;
    currentRow.push(number + rightNum);
  });

  return currentRow;
};

// Do not edit below this line
module.exports = pascal;
