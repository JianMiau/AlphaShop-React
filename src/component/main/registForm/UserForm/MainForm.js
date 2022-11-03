
import AddressForm from "./addressForm"
import ShippingForm from "./shippingForm"
import CreaditCardForm from "./creditCardFrom"
import styled from "styled-components"
const FormStyle = styled.div`
height: 590px ;
border-bottom: 1px solid lightgray;
& .form-container {
  width: 100% ;
}
`
function MainForm(props) {
  return (
    <FormStyle>
      <section className="form-container col col-12">
        {/* <AddressForm /> */}
        {/* <ShippingForm /> */}
        <CreaditCardForm />
      </section>
    </FormStyle>
  )
}
export default MainForm