const inquirer = require('inquirer');
const fs = require('fs');

const svgGen = (data) =>

`


`

inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Please provide the text.',
    },
    {
      type: 'input',
      name: 'logoColor',
      message: 'What color will the text be?',
    },
    {
      type: 'list',
      name: 'logoShape',
      message: 'What will the shape be?',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'logoShapeColor',
      message: 'What color will the shape be?',
    },

])


.then((userSelection) => {
    const svgChoice = svgGen(userSelection);
    //aa
    fs.writeFile("", svgChoice, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

function init() {}
init();