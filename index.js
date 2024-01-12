const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
  inquirer
  .prompt([
  { type:'input',
    name: 'name',
    message: 'What is the title of your project?',
  },
  { type:'input',
    name: 'description',
    message: 'Describe your project',
  },
  { type:'list',
  name: 'communication',
  message: 'What is your preffered method of communication?',
  choices:['Email', 'text','phone','post'],
  }
  ])

  .then((answers) => {
    console.log(answers);

    fs.writeFile('answers.txt', content, process.argv[2], (err) =>
    err ? console.error(err) : console.log('Success!')
    );
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

}

// function call to initialize program
init();
