import { turnDial, countZeroTicks } from "../support/functions";

describe('Day 1', () => {
  let puzzleInput;
  let count = 0;

  let currentValue = 50;

  before(() => {
    // Set up the Puzzle input to be an array in the fixture file
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
      cy.log('Starting to figure out password value').then(() => {
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
  });

  context('Part 2', () => {
    it('validate countZeroTicks()', () => {
      const testPosition = 50;
      const testDir = 'L'
      const testTrav = 212
      const input = testDir + testTrav.toString()
      const expectedAnswer = {
        dialValue: testPosition - testTrav,
        result: 2
      };
      cy.log(`Expecting to dialValue === ${expectedAnswer.dialValue} and result === ${expectedAnswer.result}`).then(() => {
        const zeroTicks = countZeroTicks(testPosition, input)
        expect(zeroTicks.dialValue).to.be.eq(expectedAnswer.dialValue)
        expect(zeroTicks.result).to.be.eq(expectedAnswer.result);
      })

    })
    it('Determine the real password based on \'method 0x434C49434B\'', () => {
      currentValue = 50;
      count = 0;
      cy.log('Starting to figure out the real password value').then(() => {
        puzzleInput.forEach((input) => {
          const zeroHits = countZeroTicks(currentValue, input)
          currentValue = zeroHits.dialValue;
          count = count + zeroHits.result
        })
      }).then(() => {
        cy.log(`Final Count with method 0x434C49434B: ${count}`).then(() => {
          console.log(`Final Count with method 0x434C49434B: ${count}`)
        })
      })
    })
  })
});
