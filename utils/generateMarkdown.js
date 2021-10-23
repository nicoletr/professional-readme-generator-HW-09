// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'No License'){
    license = license.replace(/\s/g, '%20');
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  };
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'No License') {
    let license = license.replace(/\s/g, '%20');
    return `[License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  };
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'No License') {
    let license = license.replace(/\s/g, '%20');
    return `This project is licensed under ${license}`;
  };
  return 'No License';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Licensing
  ${renderLicenseSection(data.license)}
  \n ${renderLicenseBadge(data.license)}
  \n ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
