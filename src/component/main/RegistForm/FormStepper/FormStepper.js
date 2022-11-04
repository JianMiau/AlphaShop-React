import StepperBars from './StepperBars/StepperBars'
import styled from 'styled-components'
const StepperStyle = styled.div`
width: 100% ;
margin: 0;
.stepper-container {
  box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  justify-content: space-between ;
  padding: 48px 0;
 
}

`
// active={props.step >= 2} 裡面傳boolean來判斷表單階段，用===判斷型別和數值
function FormStepper (props) {
  return (
    <StepperStyle>
      <section className='stepper-container'>
        <StepperBars phase='adress' step={props.step} active={props.step >= 1} stepNumber={1} stepLabel='寄送地址' />
        <StepperBars phase='shipping' step={props.step} active={props.step >= 2} stepNumber={2} stepLabel='運送方式' />
        <StepperBars phase='credit-card' step={props.step} active={props.step === 3} stepNumber={3} stepLabel='付款資訊' />
      </section>
    </StepperStyle>

  )
}

export default FormStepper
