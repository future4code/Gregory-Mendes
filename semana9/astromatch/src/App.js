import React, { useState, useEffect } from 'react';
import MatchPage from './screens/MatchPage/MatchPage';
import MatchesListPage from './screens/MatchesListPage/MatchesListPage';
import { AppContainer } from './styled'

const App = () => {

  return (
    <AppContainer>
      <MatchPage/>
    </AppContainer>
  );
}

export default App;
