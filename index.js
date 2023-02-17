const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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

// array of questions for user
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
    // option=> function that takes an object and returns the value of its name property
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
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname, fileName);
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