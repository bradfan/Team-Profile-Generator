console.log("index.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const teamArray = [];

determineEmployee()
function determineEmployee() {
  inquirer.prompt([
      {
        type: "list",
        name: "position",
        message: "What is the Employee's position?",
        choices: ["Manager", "Engineer", "Intern", "I am finished for now"],
      },
    ])
    .then((answer) => {
      switch (answer.position) {
        case "Manager":
          managerInfo();
          break;
        case "Engineer":
          engineerInfo();
         break;
        case "Intern":
            internInfo()
          break;
        case "I am finished for now":
            createHTML()
          break;
      }
    });
}

function managerInfo() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the Manager's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Managers's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Managers's office number?",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      teamArray.push(manager);
      determineEmployee();
    });
}

function engineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is the Engineer's id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is the Engineer's email address?",
          },
        {
           type: "input",
           name: "gitHubUserName",
           message: "What is the Engineer's Github user name?"
        }
       
    ])
    .then((answer) => {
        const engineer = new Engineer(
          answer.name,
          answer.id,
          answer.email,
          answer.gitHubUserName
        );
        teamArray.push(engineer);
        determineEmployee();
      });
}

function internInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
          },
          {
            type: "input",
            name: "id",
            message: "What is the Intern's id?",
          },
          {
            type: "input",
            name: "email",
            message: "What is the Intern's email address?",
          },
          {
            type: "input",
            name: "school",
            message: "What school does the Intern attend?"
          }
    ])
    .then((answer) => {
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.school
        );
        teamArray.push(intern);
        
        determineEmployee();
      });
}

function createHTML() {
    let teamHTML = ""
    const header = `
    <!DOCTYPE html>
        <html lang="en-us">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
            <title>My Team</title>
        </head>
        <body>
        <style>
            .title{
            text-align: center;
            }
            body{
            background-color: lightblue;
            }
            .card{
            background-color: lightgreen;
            width: 20%;
            }
            .media-content{
            border-radius: 10px;
            border: 2px solid black;
            background-color: lightgrey;
            margin-bottom: 20px; 
            }
            .burrito{
                display:flex;
                flex-direction: row;
                float: left;
                width: 100%;
                padding: 0 10px;
            }
            .is-4{
                background-color: lightblue;
            }
            
        </style>
            
            <section class="section">
                <div class="container">
                    <h1 class="title">
                        My Team
                    </h1>
                </div>
            </section>
            <div class="burrito">`;
            teamHTML+=header;
  for(let subClass of teamArray){
    console.log("position: ", subClass.getPosition())
    console.log(subClass)
    if (subClass.getPosition() === "Manager"){
       // create manager card, push into teamHTML
      teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Manager</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4"><a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">Office Number: ${subClass.officeNumber}</p>
      </div>
  </div>
  </div>
  </div>
  `;
    }
    if(subClass.getPosition() === "Engineer"){
      //if subclass postion == engineer
    //create engineer card
      teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Engineer</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4"><a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">Github profile:<a href= "https://github.com/${subClass.gitHubUsername}">${subClass.gitHubUserName}</a></p>
      </div>
  </div>
  </div>
  </div>
  `;
    }
    if(subClass.getPosition() === "Intern"){
      //if subclass postion === intern
    //create intern card
     teamHTML += ` 
      <div class="card">
      <div class="card-content">
      <div class="media">
      <div class="media-content">
          <p id="role" class="title is-4">Role: Intern</p>
          <p id="name" class="title is-4">Name: ${subClass.name}</p>
          <p id="id" class="title is-4">ID: ${subClass.id}</p>
          <p id="email" class="title is-4"><a href="mailto:${subClass.email}">${subClass.email}</a></p>
          <p id="modifier" class="title is-4">School: ${subClass.school}</p>
      </div>
  </div>
  </div>
  </div>
  `;
    } 
  }
  
const footer=` </div>  
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
            <script src = "script.js"></script>
        </body>
        </html>
    `;
    teamHTML+=footer
    // console.log("wahoo!: ",teamHTML)

    fs.writeFile("index.html", teamHTML,(err)=>{
      if (err) throw err;
       console.log("sent to html");
    }) 
}



