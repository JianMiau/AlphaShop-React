
import AddressForm from './AddressForm'
import ShippingForm from './ShippingForm'
import CreditCardForm from './CreditCardForm'

function FormTypes(props) {
  return (
    <section className='form-container'>
      {props.step === 1 && <AddressForm />}
      {props.step === 2 && <ShippingForm />}
      {props.step === 3 && <CreditCardForm />}
    </section>
  )
}
export default FormTypes
