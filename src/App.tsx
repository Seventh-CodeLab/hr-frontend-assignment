import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';
import SearchResultList from './components/SearchResultList';
import IShip from './models/IShip';

function App() {
  const [searchResult, setSearchResult] = useState<IShip[]>()
  const [isLoading, setIsLoading] = useState<boolean>(false) // This loads very fast, so hard to notice the loading text.

  return (
    <CentralizedContainer>
      <h1>Ship Lookup</h1>
      <SearchForm setSearchResult={setSearchResult} setIsLoading={setIsLoading}/>
      {
        isLoading &&
          <p>Loading...</p>
      }
      {
        searchResult &&
        <SearchResultList list={searchResult} />
      }
    </CentralizedContainer>
  );
}

const CentralizedContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

export default App;
