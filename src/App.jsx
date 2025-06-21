import React from 'react';
import Header from './components/Header';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from './theme';
import FilterTabs from './features/filter/FilterTabs'
import ExtensionCard from './features/extension/ExtensionCard';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    margin: 0;
    font-family: sans-serif;
    transition: background 0.3s, color 0.3s;
  }
`;
const CenterContainer = styled.div`
width: 100%;
max-width: 80%;
margin: 0 auto;
`


const App = () => {
  const theme = useSelector((state) => state.theme.mode);
  

  return (
   <CenterContainer>
     <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <FilterTabs />
      <ExtensionCard />
    </ThemeProvider>
   </CenterContainer>
  );
};

export default App;