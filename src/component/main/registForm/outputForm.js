import RegistStepper from "./registStepper"
import styled from "styled-components"
import MainForm from './UserForm/MainForm'

const FormStyle = styled.div`
.register-container {
  padding: 80px 0;
}

.register-title{
  margin: 0 ;
  font-size: 2rem ;
}

`

function OutputForm(props) {
  return (
    <FormStyle>
      <section className="register-container" data-phase="1" data-total-price="0">
        <h2 className="register-title">{props.title}</h2>
        <RegistStepper />
        <MainForm title='寄送地址' />
      </section>
    </FormStyle>

  )

}
export default OutputForm