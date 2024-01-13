function renderContributing(answers) {
  if (answers === true) {
  return `Thank you for contributing`
  } else {
    return `Maybe Next time!`
  }
  
}

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ![badge](https://img.shields.io/badge/licence-${answers.license}-blue)
  ## Table-of-contents
  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ### Description
  ${answers.description}

  ### License
  ${answers.license}

  ### Usage
  ${answers.usage}

  ### Installation
  ${answers.installation}

  ### Contributing
  ${renderContributing(answers)}

  ### Test
  ${answers.test}

  ### Questions
  Please contact me at the links below. <br />
  [GitHub](https://github.com/${answers.github})<br />
  <a href="mailto:${answers.email}?">Email</a>
`;
}

module.exports = generateMarkdown;
