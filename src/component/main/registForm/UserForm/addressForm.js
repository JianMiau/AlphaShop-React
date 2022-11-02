import Input from './input'
import styled from "styled-components"
import SelectInputLocation from './selectInputLocation'
import SelectInputMr from './SelectInputMr'
const FormStyle = styled.div`
font-size: 1rem ;
width: 100% ;
padding: 3%;
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
    border: 1px solid black ;
    border-radius: 25px ;
  }
}
`
function AddressForm() {
  return (
    <FormStyle>
      <form className="form" data-phase="address">
        <h3 className="form-title">寄送地址</h3>
        <section className="form-body">
          <div className="form-row">
            <SelectInputMr width={30} />
            <Input width={70} label='姓名' type='text' placeholder='請輸入姓名' />
          </div>
          <div className="form-row">
            <Input width={50} label='電話' type='tel' placeholder='請輸入電話' />
            <Input width={50} label='E-mail' type='email' placeholder='請輸入信箱' />
          </div>
          <div className="form-row">
            <SelectInputLocation width={30} label='縣市' />
            <Input width={70} label='地址' type='adress' placeholder='請輸入地址' />
          </div>
        </section>

      </form>

    </FormStyle>

  )
}
export default AddressForm