import { turnDial, countZeroTicks } from "../support/functions";

describe('Day 1', () => {
  let sampleInput;
  let puzzleInput;
  let count = 0;
  let currentValue = 50;

  before(() => {
    // Set up the Puzzle input to be an array in the fixture file
    cy.fixture("day1").then((input) => {
      sampleInput = input.sample;
      puzzleInput = input.input;
    })
  })

  context('Part 1', () => {
    it('validate turnDial()', () => {
      const testPosition = 50;
      const testDir = 'L'
      const testTrav = 2
      const input = testDir + testTrav.toString();
      const expectedAnswer = testPosition - testTrav;
      cy.log(`Expecting to move the dial ${testTrav} ticks to the ${testDir} to position ${expectedAnswer}`).then(() => {
        const result = turnDial(testPosition, input);
        expect(result).to.be.eq(expectedAnswer)
      })
    })

    it('validate example input', () => {
      const expectedAnswer = 3;
      cy.log(`Processing Sample Input`).then(() => {
        sampleInput.forEach((input) => {
          currentValue = turnDial(currentValue, input)
          if (currentValue === 0 || currentValue % 100 === 0) {
            count++;
          }
        })
      }).then(() => {
        cy.log(`Final Count: ${count}`).then(() => {
          console.log(`Final Count: ${count}`);
          expect(count).to.eq(expectedAnswer);
        })
      })
    });

    it('Determine the actual password for the door', () => {
      currentValue = 50;
      count = 0;
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

    it('Validate Example Input', () => {
      currentValue = 50;
      count = 0;
      const expectedAnswer = 6
      cy.log('Processing Sample Input').then(() => {
        sampleInput.forEach((input) => {
          const zeroHits = countZeroTicks(currentValue, input)
          currentValue = zeroHits.dialValue;
          count = count + zeroHits.result
        })
      }).then(() => {
        cy.log(`Final Count with method 0x434C49434B: ${count}`).then(() => {
          console.log(`Final Count with method 0x434C49434B: ${count}`)
          expect(count).to.eq(expectedAnswer)
        })
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
