export function dataStructure(string): boolean {
  const letterArray: string[] = string.toLowerCase().split("");

  for (const letter of letterArray) {
    let repetitionNumber = 0;
    for (const nextLetter of letterArray) {
      repetitionNumber = letterRepetitionCount(
        letter,
        nextLetter,
        repetitionNumber
      );
      if (repetitionNumber > 1) {
        return false;
      }
    }
  }

  return true;
}

function letterRepetitionCount(
  letter: string,
  nextLetter: string,
  repetitionNumber: number
) {
  if (letter === " ") {
    repetitionNumber--;
  }
  if (letter === nextLetter) {
    repetitionNumber++;
  }
  return repetitionNumber;
}
