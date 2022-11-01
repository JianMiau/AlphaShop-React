import styled from "styled-components"
import OutputForm from "./registForm/outputForm"
const MainStyle = styled.div`
padding: 0 165px ;
.main-container {
  width: 100% ;
  display: grid ;
  grid-template-columns: 6fr minmax(125px,1fr) 4fr;
  grid-template-rows: auto ;
  column-gap: 30px;
  & .register-container {
    grid-column: 1/2 ;
  } 
}

`

export default function Main() {
  return (
    <MainStyle>
      <div className="main">
        <div className="main-container">
          <OutputForm title='結帳' />
        </div>
      </div>
    </MainStyle>

  )
}