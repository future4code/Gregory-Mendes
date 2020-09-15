import React, { useState } from 'react';
import MatchPage from './screens/MatchPage/MatchPage';
import MatchListPage from './screens/MatchListPage/MatchListPage';
import { AppContainer } from './styled'

const App = () => {
  const [currentPage, setCurrentPage] = useState("match-page");

  const changeToMatchPage = () => {
    setCurrentPage("match-page")
  }

  const changeToMatchesListPage = () => {
    setCurrentPage("matches-list-page")
  }

  const showCurrentPage = () => {
    let page;
    switch (currentPage) {
      case "match-page":
        page = <MatchPage onClickListButton={changeToMatchesListPage}/>
        break;

      case "matches-list-page":
        page = <MatchListPage onClickBackButton={changeToMatchPage}/>;
        break;
      
      default:
        page = <MatchPage onClickListButton={changeToMatchesListPage}/>;
        break;
    }

    return page;
  }

  return (
    <AppContainer >
      {showCurrentPage()}
    </AppContainer>
  );
}

export default App;
