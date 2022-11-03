import RegistStepper from "./registStepper"
import styled from "styled-components"
import MainForm from './UserForm/MainForm'

const FormStyle = styled.div`
width: 100%;
height: 730px ;
border-bottom: 1px solid lightgray;
.register-container {
  display: flex ;
  width: inherit ;
  flex-direction: column ;
  padding: 3% 0;
}

.register-title{
  margin: 0 ;
  font-size: 3.2rem ;
}

`

function OutputForm(props) {
  return (
    <FormStyle>
      <section className="register-container" data-phase={props.step} data-total-price="0">
        <h2 className="register-title">{props.title}</h2>
        <RegistStepper step={props.step} />
        <MainForm step={props.step} />
      </section>
    </FormStyle>

  )

}
export default OutputForm