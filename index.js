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

{
    //Table of Contents
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
    name: 'contribuiting',
    message: 'Please provide contribution guidelines for your Project:',
},
{
    // Tests
}, 
{
    // Questions
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
