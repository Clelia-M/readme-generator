// import fs module
const fs = require("fs");

// import the path module 
const path = require('path');

// import the inquirer module
const inquirer = require("inquirer");

// import the generateMarkdown function from the generateMarkdown.js file in the utils folder
const generateMarkdown = require("./utils/generateMarkdown");

// Array of licence options for the user to choose from
const licenseOptions = [
    {
        name: 'MIT', 
        badge: 'https://img.shields.io/badge/License-MIT-blue.svg'
    }, 
    {
        name: 'GPL',
        badge: 'https://img.shields.io/badge/License-GPL-blue.svg'
    },
    {
        name: 'Apache',
        badge: 'https://img.shields.io/badge/License-Apache-blue.svg'
    },
    {
        name: 'GNU',
        badge: 'https://img.shields.io/badge/License-GNU-blue.svg'
    },
];

// Array of questions that will be presented to the user when the program run to store the README data
const questions = [
{
    // The title of my project
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?'
}, 

{ // Description
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your Project:', 
}, 

{ // Installation
    type: 'input',
    name: 'installation', 
    message: 'Please provide installation instructions for your Project:'
},
{
    // Usage
    type: 'input',
    name: 'usage', 
    message: 'Please provide usage instructions for your Project:'
},
{
    // License 
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project',
    // choices wants an array of strings 
    // maps property maps each element in the const licenseOptions using the name property
    // option => function that takes an object and returns the value of its name property
    choices: licenseOptions.map(option => option.name)
}, 
{
    // Contributing
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your Project:',
},
{
    // Tests
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your Project:'
}, 
{
    // Questions 1 GitHub Username
    type: 'input',
    name: 'githubUsername',
    message: 'Which is your GitHub username?'
},
{
    // Questions 2 Email address
    type: 'input',
    name: 'email',
    message: 'Which is your email address?',
}
];

// function to write README file
// function writetoFile takes a fileName and data parameter and writes the data to a file the the given name
function writeToFile(fileName, data) {

    // path.join method to create a file path that is relative to this directory
    const filePath = path.join(__dirname, fileName);

    // fs.writeFile method to write the data to the file
    // if there is an error is logged to the console
    // else success message
    fs.writeFile(filePath, data, err => {
        if(err) {
            console.error(err);
        } else {
            console.log(`Successfully generated ${fileName}`);
        }
        });
}

// function to initialize program
function init() {

    
    inquirer.prompt(questions)
    .then(answers => {
        console.log('Generating README...');
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    })
    .catch(err => {
        console.error(err);
    });
}

// function call to initialize program
init();