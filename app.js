// init
import path from 'path';
import fetch from 'node-fetch';
import fs from 'fs';

// Variable Definition
const __dirname = path.dirname('.');

// To Run, make sure to pass the --year and --day parameters

function initializeDirectory(year) {
    const yearCheck = Number.isInteger;
    const yearLength = year.length;
    if (!yearCheck | yearLength != 4) {
        console.log(`${year} is not a valid value.`);
        return;
    }
    else {
        try {
            var directory = path.join(__dirname, `aoc-${year}`);
            if (!fs.existsSync(directory)) {
                console.log(`aoc-${year} does not exist! Provisioning Directory`)
                fs.mkdir(`aoc-${year}`,{recursive: true},err => {
                    if (err) throw (err);
                });
                console.log(`Provisioned aoc-${year}!`);
            };
        }
        catch (error) {
            console.log(error)
        }
    };
    return directory;
};

function initializeDay(dir, day) {
    const dayCheck = Number.isInteger;
    if (!dayCheck | day < 1 | day > 25) {
        console.log(`${day} is not a valid value.`);
        return;
    }
    else {
        try {
            const dayFile = path.join(dir,`Day${day}.js`);
            if (!fs.existsSync(dayFile)) {
                console.log(`Day${day}.js doesn't exist.`);
                fs.writeFileSync(`${dayFile}`,'');
                console.log(`${dayFile} has been created!`)
            }
            else {
                console.log(`Day${day} exists.`);
            }
        }
        catch (error) {
            console.log(error);
        };
    };
};


// Main Code
// Validate that runtime parameters are passed through
const year = process.argv[2];
const day = process.argv[3];
if (!year | !day) {
    console.error('You attempted to run app.js without passing either a year or a day. Please try again using the following command syntax: node app year day (Example: node app 2023 14 would be Day 14 of 2023)');
    process.exit();
};

// Initialize Year Directory if the year has not been made yet
try {
    var aocDir = initializeDirectory(year);
} catch (error) {
    console.log(error);
    process.exit();
};

// Initialize the day file if it does not exist
try {
    initializeDay(aocDir,day);
} catch (error) {
    console.log(error);
    process.exit();
};

console.log(`You are ready for Day ${day} of the Advent of Code ${year}!`);
process.exit(0);