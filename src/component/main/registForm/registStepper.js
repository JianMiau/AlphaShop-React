import StepperBars from "./stepperBars"
import styled from "styled-components"
const StepperStyle = styled.div`
width: 100% ;
margin: 0;
.stepper-container {
  width: 100% ;
  display: flex ;
  justify-content: space-between ;
 
}

`

export default function RegistStepper(props) {
  return (
    <StepperStyle>
      <section className="stepper-container">
        <StepperBars phase='adress' step={props.step} active={props.step >= 1 ? true : false} stepNumber={1} stepLabel='寄送地址' />
        <StepperBars phase='shipping' step={props.step} active={props.step >= 2 ? true : false} stepNumber={2} stepLabel='運送方式' />
        <StepperBars phase='credit-card' step={props.step} active={props.step == 3 ? true : false} stepNumber={3} stepLabel='付款資訊' />
      </section>
    </StepperStyle>


  )
}