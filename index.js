const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

//questions for readme generator
const questions = [
    {   
    type: "input",
    name: "title",
    message: "What is the title of your project?"

    },

    {
    type: "input",
    name: "description",
    message: "Please provide the description of your project."
    },

    {
     type: "input",
     name: "installation",
     message: "Please provide the installation instructions."  
    },

    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage."
    },

    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties"

    },

    {
        type: "input",
        name: "tests",
        message: "Please provide the project tests"
    },

    {
        type: "input",
        name: "license",
        message: "Please provide the project license or your badge link"
    }, 

]

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
    })
  }

  init()