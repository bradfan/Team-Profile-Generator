console.log("engineer.js says hello")
const employee = require('./employee.js');
const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: "input",
    name: "gitHubUserName",
    message: "What is your Github user name?"
  }
])
.then (function(answer){
  console.log("Github name:", answer)
})

class Engineer extends Employee{
    constructor(name, id, email, githubUserName){
      super(name,id,email);
      this.githubUserName = githubUserName
    }
    
 
  getgitHubUserName(){
    return this.gitHubUserName;
  };
  getPosition(){
    return "Engineer";
  };
 };


     module.exports = Engineer.js;