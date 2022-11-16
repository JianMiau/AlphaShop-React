import StepperBars from './StepperBars'
import FormStepperStyle from './FormStepperStyle'
// stepper 變換只有讀取資料狀態，沒有事件觸發
import { useFormData } from '@/component/Context/FormContext'
// ex: active={step >= 2} 裡面傳boolean來判斷表單階段，用===判斷型別和數值
function FormStepper(props) {
  const step = useFormData().currentPage
  return (
    <FormStepperStyle>
      <section className='stepper-container'>
        <StepperBars phase='adress' step={step} active={step >= 1} stepNumber={1} stepLabel='寄送地址' />
        <StepperBars phase='shipping' step={step} active={step >= 2} stepNumber={2} stepLabel='運送方式' />
        <StepperBars phase='credit-card' step={step} active={step === 3} stepNumber={3} stepLabel='付款資訊' />
      </section>
    </FormStepperStyle>

  )
}

export default FormStepper
