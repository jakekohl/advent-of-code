import { turnDial } from "../support/functions";

describe('Day 1', () => {
  let puzzleInput;
  let count = 0;

  let currentValue = 50;

  before(() => {
    cy.fixture("day1").then((input) => {
      puzzleInput = input;
    })
  })
  context('Part 1', () => {
    it('validate turnDial()', () => {
      const testPosition = 50;
      const input = 'L2'
      const expectedAnswer = 48;
      cy.log(`Expecting to move the dial two ticks to the left to position 48`).then(() => {
        const result = turnDial(testPosition, input);
        expect(result).to.be.eq(expectedAnswer)
      })
    })

    it('Determine the actual password for the door', () => {
      cy.log('Starting to figure out password').then(() => {
        puzzleInput.forEach((input) => {
          currentValue = turnDial(currentValue, input)
          if (currentValue === 0 || currentValue % 100 === 0) {
            count++;
          }
        })
      }).then(() => {
        cy.log(`Final Count: ${count}`).then(() => {
          console.log(`Final Count: ${count}`)
        })
      })
    })
  })
});