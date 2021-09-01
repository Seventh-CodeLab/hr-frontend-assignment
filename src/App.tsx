import React, { useState } from 'react';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

function App() {
  const [searchResult, setSearchResult] = useState<string>("")

  return (
    <CentralizedContainer>
      <h1>Sample Search form</h1>
      <SearchForm setSearchResult={setSearchResult}/>
      <h4>{searchResult}</h4>
    </CentralizedContainer>
  );
}

const CentralizedContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

export default App;
