// init
import path from 'path';
import fetch from 'node-fetch';
import fs from 'fs';

// Variable Definition
const __dirname = path.dirname('.');

// To Run, make sure to pass the --year and --day parameters


// defined function for pull data from the Advent-of-Code website
async function fetchData(year, day) {
    try {
        const response = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
            method: 'GET',
            headers: {
                'content-type': 'text/html',
                'accept': 'text/html'
            }
        });
        return response.json();
        }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Pull the data for the specific day of the Advent-of-Code website
async function pullPrompt(year, day) {
    try {
        const response = await fetch(`https://adventofcode.com/${year}/day/${day}`, {
            method: 'GET',
            headers: {
                'content-type': 'text/html',
                'accept': 'text/html'
            }
        });
        return response;
        }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};

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
    console.error('You attempted to run app.js without passing either a year or a day. Please try again using the following command syntax: node app.js --year 2023 --day 1');
    process.exit();
};

// Initialize Year Directory if the year has not been made yet
try {
    var aocDir = initializeDirectory(year);
} catch (error) {
    console.log(error);
    process.exit();
};

console.log(aocDir);
// Initialize the day file if it does not exist
try {
    initializeDay(aocDir,day);
} catch (error) {
    console.log(error);
    process.exit();
};

// Pull Prompt and data from the Advent of Code website
try {
   // const promptData = pullPrompt(year, day);
    //console.log(promptData);
} catch (error) {
    console.log(error);
};
try {
    const pullData = fetchData(year, day);
    console.log(pullData);
} catch (error) {
    console.log(error);
}