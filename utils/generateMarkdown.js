// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license !== 'No License'){
    license = license.replace(/\s/g, '_').replace('-','--');
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  };
  return '';
};

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if(license !== 'No License') {
    license = license.replace(/\s/g, '_').replace('-','--');
    return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  };
  return '';
};

// Function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if(license !== 'No License') {
    return `This project is licensed under ${license}`;
  };
  return 'No License';
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents
  * [Description](#project-description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How To Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Licensing](#licensing)
  ## Project Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How To Contribute
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  For any questions contact me at
  \n GitHub: [${data.username}](https://github.com/${data.username})
  \n Email: [${data.email}](mailto:${data.email})
  ## Licensing
  ${renderLicenseSection(data.license)}
  \n ${renderLicenseLink(data.license)}
`;
};

module.exports = generateMarkdown;
