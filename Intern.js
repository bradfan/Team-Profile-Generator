console.log("intern.js says hello")
const employee = require('./employee.js');
const fs = require("fs");

class intern extends employee{
    constructor(name,id,email,school){
      super(name,id,email);
      this.school = school
    }
    
 
 
getSchool(){
  return this.school;
};
getPosition(){
  return "Intern";
};
};



    // module.exports = intern.js;