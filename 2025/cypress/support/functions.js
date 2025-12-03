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