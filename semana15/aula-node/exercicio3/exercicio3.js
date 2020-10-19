var fs = require("fs");
const tasksList = require("./tasksList");
var data = tasksList;

/* var tasksList = require("./tasksList") */

const userTask = process.argv[2];
/* const tasksList = ["Fazer pipoca", "Pular corda"]; */

const showTasks = (task) => {
    fs.writeFile("./tasksList.js", data, function(error) {
        if (error) {
            console.log("Ocorreu um erro. Tente novamente.");
        }

        tasksList.push([...tasksList, task])
    });
    
    return console.log(tasksList);
};

showTasks(userTask);