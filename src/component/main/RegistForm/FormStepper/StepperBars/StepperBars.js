import styled from 'styled-components'
import completeLogo from '../../../../icons/pg-complete.svg'
const StepperBarStyle = styled.div`
margin: 0;
position: relative ;
.progress-group {
  display: flex ;
  font-size: 1.2rem ;
  align-items: center ;
 
  & .progress-icon {
    width:20% ;
    height: 15px ;
    display: flex ;
    align-items: center ;
    margin-right: 5px ;
    & .text p {
      width: 24px;
      height: 24px;
      border-radius: 50% ;
      text-align:center ;
      background-color: ${props => props.active ? 'black' : 'lightgrey'};
      color: white;
      margin-right: 5px ;
      display: ${props => props.step > props.stepNumber ? 'none' : 'block'}; 
    }
  }
  & .progress-label {
    width: 80% ;
    display: none ;
  }
  & .complete-logo {
    display:${props => props.step > props.stepNumber ? 'block' : 'none'};
  }
}
/*RWD mobile first/
/*大於 375px 進度條才出現label*/
@media (min-width: 375px) {
  /*注意優先級問題*/
  .progress-group { 
    & .progress-label {
    display: block;
    text-align:center ;
    color: ${props => (props.active ? 'black' : 'grey')};
  }
  }
}

 /*大於1200px才出現進度條*/
@media (min-width: 1200px) {
  &:not(:last-child)::after {
    content: '';
    top: 50%;
    left: calc(100% + 32px) ;
    position: absolute ;
    width: 60px ;
    height: 2px ;
    background-color: ${props => props.active ? 'black' : 'lightgrey'};
  }
} 

`
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
