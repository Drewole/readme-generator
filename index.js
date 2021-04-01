const inquirer = require('inquirer')
const fs = require('fs');
const makeReadme = require('./readmeGenerator');


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


Expansion Thoughts:
Set of choices starting of what you want to include.
Set of default installation instructions that could be selected from, and then will be put in numbered list in the doc
Lets add stuff to auto find gif or png screenshot in assets folder


*/

//input - Possible values: input, number, confirm, list, rawlist, expand, checkbox, password, editor
const questions = [
	{
		type: 'input',
		message: 'Project Title',
		name: 'projectTitle',
	},
	{
		type: 'input',
		message: 'Screenshot File Extension',
		name: 'fileExtension',
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
		message: 'Choose License Type',
		choices: ["MIT", "APACHE", "MOZILLA PUBLIC LICENSE 2.0", "GNU GPL v2", "THE UNLICENSE" ],
		name: 'license',
	},
	{
		type: 'input',
		message: 'Contribution Guidelines',
		name: 'contribute',
	},
	{
		type: 'input',
		message: 'Usage Information',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Test Instructions',
		name: 'testInstructions',
	},
	{
		type: 'input',
		message: 'Git Username',
		name: 'gitUsername',
	},
	{
		type: 'input',
		message: 'Email Address',
		name: 'email',
	}
	
]





function init() {
	inquirer
	.prompt(questions)


	.then(answers => {
		// console.log(makeReadme(answers))
		fs.appendFile("README.md", makeReadme(answers, '\t'), (err) => {
			console.log(`File could not be written due to ${err}`)	
		})
		
	})
	.catch(error => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	});
}




// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}




// // Function call to initialize app
init();
