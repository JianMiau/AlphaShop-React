import Input from './input'
import styled from "styled-components"
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
  margin-bottom: 24px ;

}
& .form-row {
  width: 100% ;
  display: flex ;
  & >*{
    border-radius: 25px ;
  }
}
`
function CreaditCardForm() {
  return (
    <FormStyle>
      <form className="form" data-phase="address">
        <h3 className="form-title">付款資訊</h3>
        <section className="form-body">
          <div className="form-row">
            <Input width={100} label='持卡人姓名' type='text' placeholder='Joe Doe' />
          </div>
          <div className="form-row">
            <Input width={100} label='卡號' type='text' placeholder='1111 2222 3333 4444' maxlength={12} />
          </div>
          <div className="form-row">
            <Input width={50} label='有效期限' type='text' placeholder='MM/YY' />
            <Input width={50} label='CVC/CCV' type='text' placeholder='123' maxlength={3} />
          </div>
        </section>

      </form>

    </FormStyle>

  )
}
export default CreaditCardForm