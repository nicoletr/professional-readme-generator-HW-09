const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt ([
        {
            type:'input',
            message: 'What is your title?',
            name: 'title'
        },
        {
            type:'input',
            message: 'How would you describe your project?',
            name: 'description'
        }, {
            type:'input',
            message: 'How is your project installed?',
            name: 'installation'
        },
        {
            type:'input',
            message: 'How is your project used?',
            name: 'usage'
        },
        {
            type:'input',
            message: 'What are the guidelines for contribution?',
            name: 'contribution'
        },
        {
            type:'input',
            message: 'What tests are used?',
            name: 'tests'
        },
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
