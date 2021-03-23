console.log("engineer.js says hello")
const Employee = require('./employee.js');

class Engineer extends Employee{
    constructor(name, id, email, githubUserName){
      super(name,id,email);
      this.githubUserName = githubUserName
    }
    getgitHubUserName(){
    return this.gitHubUserName;
    };
     getPosition(){
    return "Engineer";
    };
    };


     module.exports = Engineer;