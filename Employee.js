console.log("employee.js says hello");
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
        name: "position",
        message: "Which job title does the Employee have",
        choices: ["Manager", "Engineer", "Intern"]
    },
  
  ]).then(function(data) {
    console.log("data:", data) 
    //    pass by reference to class function
    
  });

  class Employee {
    constructor(name, id, email, position) {
     this.name = name;
     this.id = id;
     this.email = email;
     this.position = position;
    } 
     getName = () => {
       return this.name;
     };
     getId = () => {
       return this.id;
     };
     getEmail = () => {
       return this.email
     };
     getPosition = () => {
        return "Employee"
     }
      
}
  

  


 module.exports = Employee;
    
      

  
 //   const input = data
    // if (`${data.Manager}` === true) {
    //   fs.writeFile("manager.js", input, ()=>{
    //     console.log("sent to Manager");
    //   })
    // }if (`${data.Engineer}` === true) {
    //   fs.writeFile("engineer.js", input, ()=>{
    //     console.log("sent to Engineer");
    //   } )
    // }if (`${data.Intern}` === true){
    //   fs.writeFile("intern.js", input, ()=>{
    //     console.log("sent to Intern");
    //   })
    // }
  

 

   