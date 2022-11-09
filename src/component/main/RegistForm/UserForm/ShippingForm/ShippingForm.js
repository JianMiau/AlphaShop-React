import styled from 'styled-components'
import RadioInput from '../RadioInput/RadioInput'
const FormStyle = styled.div`
font-size: 1rem ;
width: 100% ;
padding: 3% 0;
& .form {
  display: flex ;
  flex-direction: column ;
}
& .form-title {
 font-size: 2.4rem ;
}
& .form-row {
  width: 100% ;
  display: flex ;
  & >*{
    border-radius: 25px ;
    height: 100%;
  }
 
}
`
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
