const getAverage = (...a: number[]): string => {
  let total = 0;
  let count = 0;
  // if (typeof c !== "undefined") {
  //   total += c;
  //   count++;
  // }

  for (let i = 0; i < a.length; i++) {
    total += a[i];
    count++;
  }
  const result = total / count;
  return "result" + result;
};

getAverage(10, 20, 30);
getAverage(10, 20, 33, 4, 554, 5453, 3245);
