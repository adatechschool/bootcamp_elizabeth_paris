export const calculateMajority = (numbersArray: number[]) => {
  let evenNumberCount = 0;
  let repeatedNumber = 1;
  let majorityNumber: string = "none";

  for (const number of numbersArray) {
    coutingEvenNumbers(number);
    checkingforHighestRepeatedNumber(number);
  }

  if (repeatedNumber === 1) {
    const EvenMajority = evenNumberCount > numbersArray.length / 2;
    return EvenMajority ? "Even Majority" : "Odd Majority";
  } else {
    return majorityNumber;
  }

  function checkingforHighestRepeatedNumber(number: number) {
    let count = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      if (number === numbersArray[i]) {
        count++;
      }
      if (count > repeatedNumber) {
        repeatedNumber = count;
        majorityNumber = numbersArray[i].toString();
        i++;
      }
    }
  }

  function coutingEvenNumbers(number: number) {
    if (number % 2 === 0) {
      evenNumberCount++;
    }
  }
};
