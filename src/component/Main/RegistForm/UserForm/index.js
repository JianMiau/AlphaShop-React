
import AddressForm from './AddressForm'
import ShippingForm from './ShippingForm'
import CreditCardForm from './CreditCardForm'
import styled from 'styled-components'
const FormStyle = styled.div`
width: 100% ;
`
function UserForm(props) {
  return (
    <FormStyle>
      <section className='form-container'>
        {props.step === 1 && <AddressForm />}
        {props.step === 2 && <ShippingForm />}
        {props.step === 3 && <CreditCardForm />}
      </section>
    </FormStyle>
  )
}
export default UserForm
