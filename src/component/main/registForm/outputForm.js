import RegistStepper from "./registStepper"
import styled from "styled-components"
import MainForm from './UserForm/MainForm'

const FormStyle = styled.div`
width: 100%;
height: 600px;
.register-container {
  display: flex ;
  width: 100% ;
  flex-direction: column ;
  padding: 3% 0;
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
        <MainForm />
      </section>
    </FormStyle>

  )

}
export default OutputForm