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
    license = license.replace(/\s/g, '_').replace('-','--');
    return `This project is licensed under ${license}`;
  };
  return 'No License';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return ` ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents

  * [Description](##project-description)
  * [Installation](#Installation)
  * [Licensing](#Licensing)

  ## Project Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributon
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.username}
  ${data.email}
  ## Licensing
  ${renderLicenseSection(data.license)}
  \n ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
