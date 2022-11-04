
import AddressForm from './AddressForm/AddressForm'
import ShippingForm from './ShippingForm/ShippingForm'
import CreditCardForm from './CreditCardForm/CreditCardFrom'
import styled from 'styled-components'
const FormStyle = styled.div`
width: 100% ;
`
function UserForm (props) {
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
