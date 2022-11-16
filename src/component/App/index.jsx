import { useState } from 'react'
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import AppStyleWrap from './AppStyleWrap'
import ResetStyle from '../Styles/GlobalStyle/ResetStyle'
import { FormProvider } from '../Context/FormContext'

//規格要求在App.js設置useState控制表單
function App() {
  // setFunction 命名記得用前面變數加上set
  const [pageStep, setPageStep] = useState(1)
  return (
    <AppStyleWrap>
      <ResetStyle />
      <FormProvider>
        <Header />
        <Main step={pageStep} onClick={setPageStep} />
        <Footer />
      </FormProvider>
    </AppStyleWrap>
  )
}

export default App
