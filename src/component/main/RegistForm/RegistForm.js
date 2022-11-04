import FormStepper from "./FormStepper/FormStepper"
import styled from "styled-components"
import UserForm from "./UserForm/UserForm"

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
function RegistForm(props) {
  return (
    <FormStyle>
      <section className="register-container" data-phase={props.step}>
        <h2 className="register-title">{props.title}</h2>
        <FormStepper step={props.step} />
        <UserForm step={props.step} />
      </section>
    </FormStyle>
  )
}
export default RegistForm