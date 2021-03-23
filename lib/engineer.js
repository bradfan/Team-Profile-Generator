console.log("engineer.js says hello")
const Employee = require('./lib/employee.js');

class Engineer extends Employee{
    constructor(name, id, email, gitHubUserName){
      super(name,id,email);
      this.gitHubUserName = gitHubUserName
    }
    getGitHubUserName(){
    return this.gitHubUserName;
    };
     getPosition(){
    return "Engineer";
    };
    };


     module.exports = Engineer;