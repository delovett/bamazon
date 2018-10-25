var inquirer = require("inquirer");
var mysql = require("mysql");

inquirer
    .prompt([
        {
            type: "input",
            message: "This is the first question",
            name: "first"
        },
        {
            type: "input",
            message: "This is the second question",
            name: "second"
        }
        /* Pass your questions in here */
    ])
    .then(function (answers) {
        console.log("Bamazon Customer Loaded")
        console.log(answers);
    });

