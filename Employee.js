console.log("Employee.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
     } 
      getName = () => {
        return this.name;
      };
      getId = () => {
        return this,id;
      };
      getEmail = () => {
        return this.email
      };
      getPosition = () => {
         return "Employee"
      }
    
    
  
    // printInfo() {
    //   console.log(`Name: ${this.name}`);
    //   console.log(`id: ${this.id}`);
    //   console.log(`email: ${this.email}`);
    // }
  }

  

 
   module.exports = index.js;