import path from 'path';
import fetch from 'node-fetch';
import fs from 'fs';
import console from 'console';
import number from 'number';

// defined function for pull data from the Advent-of-Code website
async function fetchData(day, year) {
    try {
        const response = await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        });
        return response;
        }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Pull the data for the specific day of the Advent-of-Code website
async function pullPrompt(day,year) {
    try {
        const response = await fetch(`https://adventofcode.com/${year}/day/${day}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        });
        return response;
        }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};

function initializeDirectory(year) {
    const yearCheck = Number.isInteger();
    const yearLength = year.length();
    if (!yearCheck | yearLength != 4) {
        console.log(`${year} is not a valid value.`);
        return
    }
    else {

        try {
            const directory = path.dirname(`./aoc-${year}`);
            if (!directory) {
                console.log(`${dirExist} does not exist! Provisioning Directory`)
                mkdir(dirExist,{recursive: true},err => {
                    if (err) throw (err);
                });
                console.log(`Provisioned aoc-${dirExist}!`)
            }
        }
        catch (error) {
            console.log(error)
        }
    };
    return true;
};

function initializeDay(day) {
    const dayCheck = Number.isInteger();
    if (!dayCheck | day < 1 | day > 25) {
        console.log(`${day} is not a valid value.`);
        return;
    }
    else {
        const dayFile = path.dirname(`Day${day}.json`);
    }
};


// Main Code
// Start by checking to see if the year directory exists
