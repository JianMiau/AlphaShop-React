import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Main from './component/main/main';
import Footer from './component/footer/footer';
import styled from 'styled-components';
const AppStyle = styled.div`
  text-align: center;
  box-sizing: border-box;
  width: 100% ;
  height: 1126px;
  font-size: 62.5% ;
  margin: 0 ;
  padding: 0 ;
  & .header {
    width: 100% ;
    height: 60px ;
    border-bottom: 1px solid black ;
  }
  & .main {
    width: 100% ;
    height: 782px ;
     border-bottom: 1px solid black ;
  }
  & .footer {
    width: 100% ;
    height: 284px ;
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
