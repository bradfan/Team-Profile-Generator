console.log("manager.js says hello");
const employee = require('./employee.js');


class manager extends employee{
    constructor(name, id, email,officeNumber){
    super(name,id,email);
    this.officeNumber = office.number 
  }

getofficeNumber(){
    return this.officeNumber;
  };
  getPosition(){
    return "Manager";
  };
};

  // module.exports = Manager;