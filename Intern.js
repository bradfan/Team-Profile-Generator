console.log("intern.js says hello")
const Employee = require('./employee.js');


class Intern extends Employee{
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



   module.exports = Intern;