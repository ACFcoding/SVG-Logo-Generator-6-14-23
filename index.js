const inquirer = require('inquirer');
const fs = require('fs');

const svgGen = (data) =>

//.svg logo

// //render() {
//     return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
//   }
// const createShape = (color) => {
// }
// const createLogo = (data) =>
//create prompt function for inputs
//limit of only 3 characters
//text color



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