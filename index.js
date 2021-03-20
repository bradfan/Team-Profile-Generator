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

  class Manager extends Employee{
      constructor(officeNumber)
    //   getRole()-overridden to return "Manager" per assignment
  };

  class Engineer extends Employee{
    constructor(githubUserName)
    //   getGithub() & getRole()-overrideen to return "Engineer" per assignment
  };

  class Intern extends Employee{
    constructor(school)
    //   getSchool(), getRole()-overridden to return "Intern" per assignment
  };