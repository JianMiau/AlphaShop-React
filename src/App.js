
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Footer from './component/Footer/footer';
import styled from 'styled-components';
const AppStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 62.5% ;
  margin: 0 ;
  padding: 0 ;
  .header {
    width: 100% ;
    height: 60px ;
    box-sizing: inherit;
  }
  .main {
    width: 100% ;
    height: auto ;
    box-sizing: inherit;
  }
  .footer {
    width: 100% ;
    height: 284px ;
    background-color:#E5E5E5 ;
    box-sizing: inherit;
  }
`

function App() {
  return (
    <AppStyle>
      <Header />
      <Main />
      <Footer />
    </AppStyle>
  );
}

export default App;
