console.log("employee.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");


class Employee {
    constructor(name, id, email) {
     this.name = name;
     this.id = id;
     this.email = email;
     
    } 
     getName(){
       return this.name;
     };
     getId(){
       return this.id;
     };
     getEmail(){
       return this.email;
     };
     getPosition(){
        return "Employee"
     }
     
}
 
module.exports = Employee;
    
//  don't worry about "sets" - constructor is kinda taking their place

  

 

   