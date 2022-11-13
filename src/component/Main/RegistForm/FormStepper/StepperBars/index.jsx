import completeLogo from '../../../../../icons/pg-complete.svg'
import StepperBarStyle from './StepperBarsStyle'

// stpper 變換邏輯主要要父層state傳進來的參數來判斷，再把它傳入style-component做變化
// props.stepNumber是元件本身的號碼、props.step是目前頁面狀態
function StepperBars(props) {
  return (
    <StepperBarStyle active={props.active} step={props.step} stepNumber={props.stepNumber}>
      <span className='progress-group'>
        <span className='progress-icon'>
          <span className='text'><p>{props.stepNumber}</p></span>
          <img src={completeLogo} className='complete-logo' alt='logo' />
        </span>
        <span className='progress-label'>{props.stepLabel}</span>
      </span>

    </StepperBarStyle>

  )
}
export default StepperBars
