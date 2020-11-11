const fs = require("fs");
const userTask = process.argv[2];

const showTasks = (task) => {
    var data = `${task}\n`
    
    fs.appendFileSync("./tasksList.txt", data, function(error) {
        if (error) {
            console.log("Ocorreu um erro. Tente novamente.");
        }
    });
    
    const content = fs.readFileSync("./tasksList.txt")
    return console.log(content.toString());
};

showTasks(userTask);