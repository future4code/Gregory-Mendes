import React from 'react';
import axios from 'axios'
import './App.css';
import { baseUrl, token } from './axiosConfig/AxiosConfig'


export default class App extends React.Component {
  state = {
    brawlers: []
  }

  getAllBrawlers = () => {
    axios.get(baseUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    this.getAllBrawlers();
  }
  
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}
