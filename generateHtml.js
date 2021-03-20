// const bootstrap = require(bootstrap)

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Employee's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Employee's email address?",
    },
    {
        type: "list",
        name: "role",
        message: "Which job title does the Employee have",
        choices: ["Manager", "Engineer", "Intern"]
    },


])
// .then(function(answers){
//     const htmlString = ``;
//     // paste HTML info here between the tick marks above.
//     console.log("data:", answers);
//     fs.writeFile("index.html", htmlString, ()=>{
//         console.log("success")
//     })
// })











//  module.exports = generateHtml.js;