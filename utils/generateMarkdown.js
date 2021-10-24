// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if(license !== 'No License'){
    license = license.replace(/\s/g, '_').replace('-','--');
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  };
  return '';
};

// Function that returns the license section and link
// If there is no license, returns an empty string
function renderLicenseSection(license) {
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
    return `##Licensing \n This project is licensed under [${license}](${link})`;
  }
  return '';
};

//Function to render credits section of README
function renderCreditsSection(credits) {
  if(credits !== ''){
    return `## Credits \n ${credits}`;
  };
  return '';
};

//Function to render credits part of table of contents
function renderContentsCredits(credits) {
  if(credits !== ''){
    return `* [Credits](#credits)`;
  };
  return '';
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  ${renderContentsCredits(data.credits)}
  * [Tests](#tests)
  * [Questions](#questions)
  * [Licensing](#licensing)
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contribution}
  ${renderCreditsSection(data.credits)}
  ## Tests
  ${data.tests}
  ## Questions
  For any additional questions, you can reach me at:
  \n GitHub: [${data.username}](https://github.com/${data.username})
  \n Email: [${data.email}](mailto:${data.email})
  ${renderLicenseSection(data.license)}
`;
};

module.exports = generateMarkdown;
