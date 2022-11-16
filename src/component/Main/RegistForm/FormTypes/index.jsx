
import AddressForm from './AddressForm'
import ShippingForm from './ShippingForm'
import CreditCardForm from './CreditCardForm'
// 這裡只有接收資料參數，無事件觸發
import { useFormData } from '@/component/Context/FormContext.js'

function FormTypes(props) {
  const step = useFormData().currentPage
  console.log(`now on page: ${step}`)
  return (
    <section className='form-container'>
      {step === 1 && <AddressForm />}
      {step === 2 && <ShippingForm />}
      {step === 3 && <CreditCardForm />}
    </section>
  )
}
export default FormTypes
