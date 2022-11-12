import Input from '../Input'
import FormStyle from '../../../../Styles/Common/FormStyle'

function CreditCardForm() {
  return (
    <FormStyle>
      <form className='form' data-phase='credit-card'>
        <h3 className='form-title'>付款資訊</h3>
        <section className='form-body'>
          <div className='form-row'>
            <Input width={100} label='持卡人姓名' type='text' placeholder='Joe Doe' />
          </div>
          <div className='form-row'>
            <Input width={100} label='卡號' type='text' placeholder='1111 2222 3333 4444' maxlength={12} />
          </div>
          <div className='form-row'>
            <Input width={48} right={2} label='有效期限' type='text' placeholder='MM/YY' />
            <Input width={50} label='CVC/CCV' type='text' placeholder='123' maxlength={3} />
          </div>
        </section>
      </form>
    </FormStyle>
  )
}
export default CreditCardForm
