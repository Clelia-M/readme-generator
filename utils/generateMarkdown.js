

// function to get the URL of the badge for the license
function getBadgeURL(license) {
  const option = licenseOptions.find(option=> option.name === license);
  return option.badge;
}

// function to get the URL of the link for the license
function getLinkURL(license) {
  const option = licenseOptions.find(option=> option.name === license);
  return `https://choosealicense.com/licenses/${option.name.toLowerCase().replace(/ /g, '-')}/`;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the [![License](${getBadgeURL(data.license)})](${getLinkURL(data.license)}) license. 

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this application, please feel free to contact me directly at ${data.email}. You can find more of my projects at ${data.githubUsername}.
`;
}

module.exports = generateMarkdown;