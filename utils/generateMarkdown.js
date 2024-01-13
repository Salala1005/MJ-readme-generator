// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Table-of-contents
  * [Description](#description)
  * [License](#license)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  [Description](#table-of-content)<br />
  ${answers.description}

  [License](#table-of-content)<br />
  ${answers.license}

  [Usage](#table-of-content)<br />
  ${answers.usage}

  [Installation](#table-of-content)<br />
  ${answers.installation}

  [Contributing](#table-of-content)<br />
  ${answers.contributing}

  [Test](#table-of-content)<br />
  ${answers.test}

  [Questions](#table-of-content)<br />
  Please contact me at <br />
  [GitHub](https://github.com/${answers.github})<br />
  [Email](${answers.email})

`;
}

module.exports = generateMarkdown;
