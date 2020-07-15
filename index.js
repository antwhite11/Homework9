const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util")
const axios = require("axios");
//var apiCall = require ("./utils/api.js") 


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
        {
            type: "input",
            name: "username",
            message: "What is your Github Username?",
        },


    ])


    }





function userGetter(username) {
     return axios
          .get(`https://api.github.com/users/${username}`).then(function(res){


            console.log(res.data)


            //var pic = 
                res.data.avatar_url

                //var email = res.data.email


                var picandemail ={
                    pic: res.data.avatar_url,
                    email: res.data.email
                    }

               
                
                //console.log(pic)
                //console.log(email)

                return picandemail;
            

           
            
            


          })

          
          //console.log(githubInfo)

          //return githubInfo
          
      
        }

    







function generateReadMe (answers,picandemail){

    
    
   


    
    
    
    return `

${answers.title} https://img.shields.io/badge/done-projectdone-red

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

- - - 

* Profile Pic
${picandemail.pic}

* Email
${picandemail.email}





`;




}



   

 promptUser ()
    .then(function(answers) {


        const { username } = answers

        console.log(username)


        userGetter(username).then(function(githubinfo){

          var readME = generateReadMe(answers,githubinfo)

            return writeFileAsync("readme.md", readME)
            .then(function(){

                
    
                console.log("Success")
    
            })
            .catch(function(err){
                console.log(err)
    
            })
    

        })

        
        
        
        
        
       

        



       





    })























//const questions = [

//];

//function writeToFile(fileName, data) {
//}

//function init() {

//}

//init();


//4c0c7cfb3ef3985d41e60abbdcb607db5af5358a Personal access token