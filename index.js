const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize program
function init() {
  inquirer
  .prompt([
  { type:'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  { type:'input',
    name: 'description',
    message: 'Please write short describe about your project',
  },
  { type:'list',
  name: 'license',
  message: 'Please select the license type',
  choices:['Mit', 'BSD3','GNU'],
  },
  { type:'input',
  name: 'usage',
  message: 'Please write short usage information',
  },
  { type:'input',
  name: 'installation',
  message: 'Please write what to install in order to use',
  },
  { type:'confirm',
  name: 'contributing',
  message: 'Would you like to accept contribution?',
  },
  { type:'input',
  name: 'test',
  message: 'Please write how to test the application',
  },
  { type:'input',
  name: 'github',
  message: 'Please write your GitHub userID',
  },
  { type:'input',
  name: 'email',
  message: 'Please write your Email address',
  },
  ])
  .then((answers) => {
    console.log(answers);

    fs.writeFile('outputreadme.md', generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log('Readme file has been created successfully!')
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

}

// function call to initialize program
init();
