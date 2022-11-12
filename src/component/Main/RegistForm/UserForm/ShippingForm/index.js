import RadioInput from '../RadioInput'
import FormStyle from '../../../../Styles/Common/FormStyle'

function ShippingForm() {
  return (
    <FormStyle>
      <form className='form' data-phase='shipping'>
        <h3 className='form-title'>運送方式</h3>
        <section className='form-body'>
          <div className='form-row'>
            <RadioInput width={100} price='免費' title='標準運送' content='約3~7個工作天' check={true} />
          </div>
          <div className='form-row'>
            <RadioInput width={100} price='$500' title='DHL貨運' content='48小時內送達' />
          </div>
        </section>
      </form>
    </FormStyle>

  )
}
export default ShippingForm
