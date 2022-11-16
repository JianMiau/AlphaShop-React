import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'
import AppStyleWrap from './AppStyleWrap'
import ResetStyle from '../Styles/GlobalStyle/ResetStyle'
import { FormProvider } from '../Context/FormContext'
import { CartProvider } from '../Context/CartContext'

function App() {
  return (
    <AppStyleWrap>
      <ResetStyle />
      <FormProvider>
        <CartProvider>
          <Header />
          <Main />
          <Footer />
        </CartProvider>
      </FormProvider>
    </AppStyleWrap>
  )
}

export default App
