const shuffleArray = (array) => {
  const resultedArray = array.slice();
  for (let i = resultedArray.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = resultedArray[i];
    resultedArray[i] = resultedArray[j];
    resultedArray[j] = temp;
  }

  return resultedArray;
};

const getSlicedArray = (array, length) => {
  if (array.length > length) {
    return array.slice(0, length);
  }

  return array;
};

export { shuffleArray, getSlicedArray };
