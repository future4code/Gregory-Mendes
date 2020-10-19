import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-gregory";

export const getTasksRequest = (setTask, setDay) => {
    axios.get(baseUrl)
    .then((response) => {
        setTask(response.data.text);
        setDay(response.data.day);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

export const postTaskRequest = (textValue, dayValue) => {
    const body = {
        text: textValue,
        day: dayValue 
    };
    
    axios.post(baseUrl, body)
    .then((response) => {
        getTasksRequest()
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

export const editTaskRequest = (taskId) => {
    axios.put(`baseUrl/${taskId}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

export const deleteTaskRequest = (taskId) => {
    axios.delete(`baseUrl/${taskId}`)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    });
};