import styled from "styled-components"
const MainStyle = styled.div`
width: 100%;
.main-container {
  /*Mobile First RWD*/
  display: flex ;
  flex-direction: column ;
  padding:0 3% ;
}
 
  @media (min-width: 800px) {
    /*grid排版網格基本大小需要包含gap*/ /*也要注意padding不然區塊會脫版*/
    display: grid ;
    grid-template-columns: minmax(362px,6fr) minmax(50px,1fr)  minmax(278px,4fr);
    grid-template-rows: auto 200px ;
    column-gap: 20px;
    padding: 0 6.45% ;
    .register-container {
    grid-column: 1/2 ;
    grid-row: 1/2 ;
  }
  .progress-control-container {
    grid-column: 1/2 ;
    grid-row: 2/3 ;
  }
  .cart-container {
    grid-column: 3/4; 
    grid-row: 1/3 ;
    padding-top: 166px ;
  }
  }
  @media (min-width: 1440px) {
     grid-template-columns:  minmax(600px,6fr) minmax(125px,1fr) minmax(440px,4fr);
     column-gap: 30px;
     padding: 0 11.45% ;
  }
`

export default MainStyle