console.log("index.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");


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
      name: "role",
      message: "Which job title does the Employee have",
      choices: ["Manager", "Engineer", "Intern"]
  },


])
.then(function(data) {
    console.log("data:", data)
    
      // console.log("sent to generateHtml.js")
  
});

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.getName = () => {
        
      };
      this.getId = () => {

      };
      this.getEmail = () => {

      };
      this.getPosition = () => {
        // returns Employee per assignment 
      }
    }
    
  
    // printInfo() {
    //   console.log(`Name: ${this.name}`);
    //   console.log(`id: ${this.id}`);
    //   console.log(`email: ${this.email}`);
    // }
  }

  

 
  //  module.exports = Manager.js;
  //  module.exports = Engineer.js;
  //  module.exports = Intern.js;