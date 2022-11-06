import styled from 'styled-components'
import RegistForm from './RegistForm/RegistForm'
import ProgressControl from './ProgressControl/ProgresControl'
import ShopCart from './ShopCart/ShopCart'
import { useState } from 'react'

const MainStyle = styled.div`
width: 100%;
.main-container {
  /*Mobile First RWD*/
  /*不太懂這裡為什麼設置width:100% 會脫版*/
  display: flex ;
  flex-direction: column ;
  padding:0 3% ;
   
  @media (min-width: 800px) {
    /*grid排版網格基本大小需要包含gap*/ /*也要注意padding不然區塊會脫版*/
    display: grid ;
    grid-template-columns: minmax(362px,6fr) minmax(50px,1fr)  minmax(278px,4fr);
    grid-template-rows: auto 200px ;
    column-gap: 20px;
    padding: 0 6.45% ;
  }
  @media (min-width: 1440px) {
     grid-template-columns:  minmax(600px,6fr) minmax(125px,1fr) minmax(440px,4fr);
     column-gap: 30px;
     padding: 0 11.45% ;
  }
 

  & .register-container {
    grid-column: 1/2 ;
    grid-row: 1/2 ;
  }
  & .progress-control-container {
    grid-column: 1/2 ;
    grid-row: 2/3 ;
  }
  & .cart-container {
    grid-column: 3/4; 
    grid-row: 1/3 ;
    padding-top: 166px ;
  }
}

`
function Main() {
  // setFunction 命名記得用前面變數加上set
  const [pageStep, setPageStep] = useState(1)
  return (

    <div className='main'>
      <MainStyle>
        <div className='main-container'>
          <RegistForm title='結帳' step={pageStep} />
          <ShopCart />
          <ProgressControl step={pageStep} event={setPageStep} />
        </div>
      </MainStyle>
    </div>
  )
}

export default Main
