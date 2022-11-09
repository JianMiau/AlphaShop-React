import { useState } from 'react'
import Header from './component/Header/Header'
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'
import styled from 'styled-components'
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
  }
`
//規格要求在App.js設置useState
function App() {
  // setFunction 命名記得用前面變數加上set
  const [pageStep, setPageStep] = useState(1)
  return (
    <AppStyle>
      <Header />
      <Main step={pageStep} onClick={setPageStep} />
      <Footer />
    </AppStyle>
  )
}

export default App
