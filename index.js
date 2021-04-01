const inquirer = require('inquirer')
const fs = require('fs');


/*
Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
///////Questions to Collect
1.Project Title
2.Description
3.Installation section should be a default, with just some minor adjustments
4.Github username. have default githuburl, just get username
5.Email
6.List of options for license.

Initial Thoughts:
Not sure if I should wrap the entire thing in template literals, try and see.
Lets add stuff to auto find gif or png screenshot in assets folder




// Here is the logic for the license selection
*/
// if ('MIT') {
// 	`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
// }else if('APACHE') {
// 	`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
// }else if('MOZILLA PUBLIC LICENSE 2.0'){
// 	`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
// }else if ('THE UNLICENSE') {
// 	`[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
// }else if ('GNU GPL v2'){
// 	`[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
// } else {
// 	`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
// }

/* //////sections needed
Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

*/

//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const questions = [
	{
		type: 'input',
		message: 'Project Title',
		name: 'projectTitle',
	},
	{
		type: 'editor',
		message: 'Give a project description.',
		name: 'description',
	},
	{
		type: 'editor',
		message: 'Installation instructions',
		name: 'install',
	},
	{
		type: 'list',
		message: 'License Type',
		name: 'license',
	},
	{
		type: 'editor',
		message: 'Installation instructions',
		name: 'installation',
	},
	{
		type: 'editor',
		message: 'Usage Information',
		name: 'usageInfo',
	}
	
]




// fs.appendFile(userInfo.txt, 'data to append', (err) => {

// })

inquirer
	.prompt(questions)


	.then(answers => {
		console.log(answers)
		
	})
	.catch(error => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});



// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}




// // Function call to initialize app
// init();
