
import AddressForm from "./addressForm"
import Input from "./input"
import styled from "styled-components"
const FormStyle = styled.div`
width:100%;
& .form-container {
  width: 100% ;
}
`
function MainForm(props) {
  return (
    <FormStyle>
      <section className="form-container col col-12">
        <AddressForm />
      </section>
    </FormStyle>
  )
}
export default MainForm