const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util")
const axios = require("axios");


const writeFileAsync = util.promisify(fs.writeFile)

var tableOfContents = ["Installation", "Usage", "License", "Contributors"]

var tocSTR = tableOfContents.join('\n')


function promptUser(){
    return inquirer.prompt([

        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",

        },
        {
            type: "input",
            name: "description",
            message: "Describe your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process for your app!",
        },
        {
            type: "input",
            name: "usage",
            message:"Describe how to use your app!"
        },
        {
            type: "input",
            name:  "license",
            message: "Who is your app licensed to?",
        },
        {
            type: "input",
            name: "contributors",
            message: "Who contributed to this application?",
        },


    ])


    }




function generateReadMe (answers){
    return `

${answers.title}

- - -

* Description
    
${answers.description}

- - -

* Table of Contents
    
${tocSTR}

- - -    


* Installation
    
${answers.installation}

- - -
    
* Usage
    
${answers.usage}

- - -
    
* License
    
${answers.license}

- - -
    
* Contributors
    
${answers.contributors}
`;
    }



   

 promptUser ()
    .then(function(answers) {

        var readME = generateReadMe(answers)

        return writeFileAsync("readme.md", readME)
        .then(function(){

            console.log("Success")

        })
        .catch(function(err){
            console.log(err)

        })






    })























//const questions = [

//];

//function writeToFile(fileName, data) {
//}

//function init() {

//}

//init();
