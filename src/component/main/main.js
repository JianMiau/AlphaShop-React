import styled from "styled-components"
import OutputForm from "./registForm/outputForm"
import ProgressControl from "./progressControl/progresControl"
const MainStyle = styled.div`
padding: 0 11.45% ;
.main-container {
  width: 100% ;
  display: grid ;
  grid-template-columns: 6fr minmax(125px,1fr) minmax(400px,4fr);
  grid-template-rows: 720px 200px ;
  column-gap: 30px;
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
  }
}

`

export default function Main() {
  return (
    <MainStyle>
      <div className="main">
        <div className="main-container">
          <OutputForm title='結帳' />
          <ProgressControl />
          {/* <ShopCart /> */}
        </div>
      </div>
    </MainStyle>

  )
}