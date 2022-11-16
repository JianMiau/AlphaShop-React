import FormStepper from './FormStepper'
import FormTypes from './FormTypes'
import RegistFormStyle from './RegistFormStyle.js'


function RegistForm(props) {
  return (
    <RegistFormStyle>
      <section className='register-container'>
        <h2 className='register-title'>{props.title}</h2>
        <FormStepper step={props.step} />
        <FormTypes />
      </section>
    </RegistFormStyle>
  )
}
export default RegistForm
