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
    switch (license) {
      case 'Apache 2.0':
        link = 'https://opensource.org/licenses/Apache-2.0';
        break;
      case 'BSD 3-Clause':
        link = 'https://opensource.org/licenses/BSD-3-Clause';
        break;
      case 'BSD 2-Clause':
        link = 'https://opensource.org/licenses/BSD-2-Clause';
        break;
      case 'GPL':
        link = 'https://opensource.org/licenses/gpl-license';
        break;
      case 'LGPL':
        link = 'https://opensource.org/licenses/lgpl-license';
        break;
      case 'MIT':
        link = 'https://opensource.org/licenses/MIT';
        break;
      case 'Mozilla Public 2.0':
        link = 'https://opensource.org/licenses/MPL-2.0';
        break;
      case 'Common Development and Distribution':
        link = 'https://opensource.org/licenses/CDDL-1.0';
        break;
      case 'Eclipse Public 2.0':
        link = 'https://opensource.org/licenses/EPL-2.0';
        break;
    }
    return link;
  }
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
  * [Usage](#how-to-use)
  * [How To Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Licensing](#licensing)
  ## Project Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## How To Use
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
