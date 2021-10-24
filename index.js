const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// List of questions to fill fields in README
const questions =
    inquirer.prompt ([
        {
            type:'input',
            message: 'What is the title of your project?',
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
        {
            type:'list',
            message: 'Which license would you like to use?',
            name: 'license',
            choices: ['Apache 2.0','BSD 3-Clause', 'BSD 2-Clause', 'GPL', 'LGPL', 'MIT', 'Mozilla Public 2.0', 'Common Development and Distribution', 'Eclipse Public 2.0', 'No License']
        },
        {
            type:'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type:'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then ((response) => {
        let fileName = `${response.title}-README.md`;
        let data = generateMarkdown(response);
        writeToFile(data, fileName);
    });

// Function to write the README file
function writeToFile(data, fileName) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('README file sucessfully written'));
};

//Function to initialise app
function init() {
    questions;
};

// Function call to initialize app
init();
