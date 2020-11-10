// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  ## Description <a name="description"></a>
  ${data.description}
  ## Installation <a name="installation"></a>
  ${data.installation}
  ## Usage <a name="usage"></a>
  ${data.usage}
  ## Contributing <a name="contributing"></a>
  ${data.contribution}
  ## Tests <a name="tests"></a>
  ${data.test}
  ## License <a name="license"></a>
  This application is covered under the ${data.license} license.
  ## Questions <a name="questions"></a>
  My GitHub username is ${data.githubUsername}.  Please feel free to peruse my other projects.
  If you have any questions regarding this application, please contact me via email at ${data.email}.
    `;
  }
  module.exports = generateMarkdown;