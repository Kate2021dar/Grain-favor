function loadGrain(levels) {
  let arrLength = levels.length;
  let lastIndex = arrLength - 1;
  let numberGran = 0;
  let prev = 0;
  let current = 0;
  let next = 0;
  let elemFour = 0;
  let difference = 0;
  let elemEnd;
  let currentInd;
  let prevPred;

  // array length is less than three
  if (arrLength <= 2) {
    numberGran = 0;
  }

  // array length is three
  if (arrLength == 3) {
    prev = 0;
    current = 0;
    next = 0;
    for (let i = 0; i < levels.length; i = i + 3) {
      prev = levels[i];
      current = levels[i + 1];
      next = levels[i + 2];
      if (current >= prev || current >= next) {
        break;
      }
      if (prev === next) {
        difference = prev - current;
        numberGran = numberGran + difference;
      }

      if (prev !== next && prev < next) {
        difference = prev - current;
        numberGran = numberGran + difference;
      }

      if (prev !== next && prev > next) {
        difference = next - current;
        numberGran = numberGran + difference;
      }
    }
  }

  // array length is greater than three
  if (arrLength > 3) {
    prev = 0;
    current = 0;
    next = 0;
    for (let i = 0; i < levels.length; i = i + 2) {
      prev = levels[i];

      current = levels[i + 1];
      currentInd = i + 1;
      if (currentInd === lastIndex) {
        prevPred = levels[i - 1];
        next = 0;
        elemFour = 0;
        if (current > prev) {
          difference = prevPred - prev;
          numberGran = numberGran + difference;
          break;
        }
      }
      next = levels[i + 2];
      elemFour = levels[i + 3];
      elemEnd = i + 2;

      if (current < prev && current < next) {
        if (prev === next) {
          difference = prev - current;
          numberGran = numberGran + difference;
        }

        if (prev !== next && prev < next) {
          difference = prev - current;
          numberGran = numberGran + difference;
        }

        if (prev !== next && prev > next && elemFour > prev) {
          difference = prev - current;
          numberGran = numberGran + difference;

          if (prev < elemFour && next < elemFour) {
            difference = prev - next;
            numberGran = numberGran + difference;
          }
        }

        if (elemEnd === lastIndex) {
          break;
        }
        prev = 0;
        current = 0;
        next = 0;
        elemFour = 0;
      }
    }
  }

  return numberGran;
}

loadGrain([4, 1, 3]); // 2
loadGrain([2, 1, 5, 2, 7, 4, 10]); // 7
loadGrain([2, 0, 1, 5, 2, 7]); // 6
loadGrain([2, 4, 2]); // 0
loadGrain([7, 4]); // 0
loadGrain([]); // 0
