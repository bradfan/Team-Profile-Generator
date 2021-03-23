console.log("index.js says hello");
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./intern.js");
const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
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
          answer.officeNumber
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
          answer.officeNumber
        );
        teamArray.push(intern);
        determineEmployee();
      });
}

function createHTML() {
  // create an HTML file from the teamArray
  let teamHTML = "";
  
   
 

  for (var i = 0; i < teamArray.length; i++) {
    teamHTML += `
    <div class="card">
                <div class="card-content">
                
                <div class="media">
                <div class="media-content">
                    <p id="name" class="title is-2">Name: ${teamArray[i].name}</p>
                    <p id="id" class="title is-4">ID: ${teamArray[i].id}</p>
                    <p id="email" class="title is-4">email: ${teamArray[i].email}</p>
                </div>
            </div>
            
                </div>
            </div>
            
        `;
  }

  const indexHTML = `
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
            }
            .media-content{
            border-radius: 10px;
            border: 2px solid black;
            background-color: lightgrey;
            margin-bottom: 20px; 
            }
            .media{
                display:flex;
                flex-direction: row;
                float: left;
                width: 25%;
                padding: 0 10px;
            }
            .is-2{
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
            
            
            ${teamHTML}
            
            



            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
            <script src = "script.js"></script>
        </body>
        </html>
    `;

    // write to the team html file
     fs.writeFile("index.html", teamArray(answers),(err)=>{
        if (err) throw err;
        console.log("sent to html")
      });
}
