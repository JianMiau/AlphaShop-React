
import AddressForm from "./addressForm"
import ShippingForm from "./shippingForm"
import CreditCardForm from "./creditCardFrom"
import styled from "styled-components"
const FormStyle = styled.div`
& .form-container {
  width: 100% ;
}
`
function MainForm(props) {
  return (
    <FormStyle>
      <section className="form-container">
        {props.step === 1 && <AddressForm />}
        {props.step === 2 && <ShippingForm />}
        {props.step === 3 && <CreditCardForm />}
      </section>
    </FormStyle>
  )
}
export default MainForm