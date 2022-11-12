import StepperBars from './StepperBars'
import FormStepperStyle from './FormStepperStyle'

// ex: active={props.step >= 2} 裡面傳boolean來判斷表單階段，用===判斷型別和數值
function FormStepper(props) {
  return (
    <FormStepperStyle>
      <section className='stepper-container'>
        <StepperBars phase='adress' step={props.step} active={props.step >= 1} stepNumber={1} stepLabel='寄送地址' />
        <StepperBars phase='shipping' step={props.step} active={props.step >= 2} stepNumber={2} stepLabel='運送方式' />
        <StepperBars phase='credit-card' step={props.step} active={props.step === 3} stepNumber={3} stepLabel='付款資訊' />
      </section>
    </FormStepperStyle>

  )
}

export default FormStepper
