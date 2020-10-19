import React from 'react';
import './App.css';
import CreateTask from './components/CreateTask/CreateTask';
import PlannerDays from './components/PlannerDays/PlannerDays';
import { AppContainer } from './styled'

function App() {
  return (
    <AppContainer>
      <CreateTask/>
      <PlannerDays/>
    </AppContainer>
  );
}

export default App;
