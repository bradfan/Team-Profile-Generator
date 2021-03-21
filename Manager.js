console.log("manager.js says hello");
const employee = require('./employee.js');
const inquirer = require("inquirer");
const fs = require("fs");

class manager extends employee{
    constructor(officeNumber)
    
};
getofficeNumber = () => {
    return this.officeNumber;
  };
  getPosition = () => {
    return "Manager";
  };


  // module.exports = manager.js;