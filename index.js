console.log("index.js says hello");
// const bulma = require("bulma");
const inquirer = require("inquirer");
const fs = require("fs");
const employee = require('./employee.js');
// const intern = require('./intern.js');
const manager = require('./manager.js');
const engineer = require('./engineer.js');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Employee's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employee's email address?",
    },
    {
        type: "list",
        name: "position",
        message: "Which job title does the Employee have",
        choices: ["Manager", "Engineer", "Intern","I don't want to add anymore employees"]
    },
  
  ]).then(function({employee}) {
    console.log("data:", data) 
    switch(employee){
        case "Manager":
        // manager prompt code block
        break;
        case "Engineer":
        // engineer prompt code block
        break;
        case "Intern":
        //  engineer prompt code block
        break;
    }
    
    
  });
        /**.then(function(data) {
    fs.writeFile("genREADME.md", generateMarkdown(data),(err)=>{
        if (err) throw err;
        console.log("sent to generateMarkdown.js")
    });
}); */



    
      
  















