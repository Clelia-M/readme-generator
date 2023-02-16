const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
}, 
{
    // Contributing
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
