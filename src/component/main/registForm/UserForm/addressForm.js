import Input from './input'
import styled from "styled-components"
import SelectInputLocation from './selectInputLocation'
import SelectInputMr from './SelectInputMr'
import Option from './option'
const FormStyle = styled.div`
font-size: 1rem ;
width: 100% ;
padding: 3% 0;
border-bottom: 2px solid  lightgray;

& .form {
  display: flex ;
  flex-direction: column ;
}
& .form-title {
  font-size: 2rem ;
}
& .form-row {
  width: 100% ;
  display: flex ;
  & >*{
    border-radius: 25px ;
  }
}
`
const optionData = [
  { id: 'mr', title: '先生' },
  { id: 'ms', title: '小姐' },
  { id: 'mx', title: '不明' }
]
function AddressForm() {
  return (
    <FormStyle>
      <form className="form" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body">
          <div className="form-row">
            <SelectInputMr width={35} label='稱謂' />
            <Input width={65} label='姓名' type='text' placeholder='請輸入姓名' />
          </div>
          <div className="form-row">
            <Input width={50} label='電話' type='tel' placeholder='請輸入電話' />
            <Input width={50} label='E-mail' type='email' placeholder='請輸入信箱' />
          </div>
          <div className="form-row">
            <SelectInputLocation width={35} label='縣市' />
            <Input width={65} label='地址' type='adress' placeholder='請輸入地址' />
          </div>
        </section>

      </form>

    </FormStyle>

  )
}
export default AddressForm