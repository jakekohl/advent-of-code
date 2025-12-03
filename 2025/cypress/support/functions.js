/**
 * Turns the dial L or R based on the input provided
 * @param currentPosition {integer}
 * @param input {string}
 * 
 * @returns updated currentPosition value
 */
export function turnDial(currentPosition, input) {
  const direction = input.slice(0,1);
  const ticks = Number(input.slice(1));

  if (direction === 'L') {
    return currentPosition - ticks
  } else {
    return currentPosition + ticks
  }
}

/**
 * 
 */
export function countZeroTicks(currentPosition, input) {
  const direction = input.slice(0,1);
  const ticks = Number(input.slice(1));

  let result = 0;
  let tempPosition = currentPosition
  let units = 1

  while (units <= ticks) {
    if (direction === 'L') {
      tempPosition = tempPosition - 1
    } else {
      tempPosition = tempPosition + 1
    }
    if (tempPosition === 0 || tempPosition % 100 === 0) {
      result++;
    }
    units++;
  }

  return {
    dialValue: tempPosition, 
    result,
  };
}