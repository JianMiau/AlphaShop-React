import Input from "./input"
import styled from "styled-components"
const FormStyle = styled.div`
width: 100%;
 & .form-strips {
  width: 100% ;
  display: flex;
  padding: 0 5px;
}
`
function MainForm(props) {
return (
    <FormStyle>
      <section class="form-container col col-12">
        <form class="col col-12" data-phase="address">
          <h3 class="form-title">寄送地址</h3>
          <section class="form-body col col-12">
          </section>
        </form>
      </section>
    </FormStyle>
  )
}
 export default MainForm