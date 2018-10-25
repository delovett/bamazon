var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err, res){
    if(err){
        throw err;
    }
    else{
        //console.log("Database connection made!")
    }
})



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

