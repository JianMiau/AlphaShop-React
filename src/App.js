import { useState } from 'react'
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'
import styled from 'styled-components'
import ResetStyle from './component/Styles/GlobalStyle/ResetStyle'
// 使用styled-components
const AppStyle = styled.div`
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
//規格要求在App.js設置useState控制表單
function App() {
  // setFunction 命名記得用前面變數加上set
  const [pageStep, setPageStep] = useState(1)
  return (
    <AppStyle>
      <ResetStyle />
      <Header />
      <Main step={pageStep} onClick={setPageStep} />
      <Footer />
    </AppStyle>
  )
}

export default App
