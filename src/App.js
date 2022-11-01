
import Header from './component/header/header';
import Main from './component/main/main';
import Footer from './component/footer/footer';
import styled from 'styled-components';
const AppStyle = styled.div`
  box-sizing: border-box;
  width: 100vw ;
  font-size: 62.5% ;
  margin: 0 ;
  padding: 0 ;
  .header {
    width: 100% ;
    height: 60px ;
    background-color: lightpink ;
    box-sizing: inherit;
  }
  .main {
    width: 100% ;
    height: 782px ;
    background-color: lightgreen ;
    box-sizing: inherit;
  }
  .footer {
    width: 100% ;
    height: 284px ;
    background-color: lightsalmon ;
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
