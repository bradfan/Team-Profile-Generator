console.log("index.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");
// const generateHtml = require("./generateHtml.js");

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // add functions to the class function?
    // getName(), getId(), getEmail() and getRole()-returns "Employee" per assignment
  
    // printInfo() {
    //   console.log(`Name: ${this.name}`);
    //   console.log(`id: ${this.id}`);
    //   console.log(`email: ${this.email}`);
    // }
  }