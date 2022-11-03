import styled from "styled-components"
import compelteLogo from "../../icons/pg-complete.svg"
const StepperBarStyle = styled.div`
margin: 0;
position: relative ;
  &:not(:last-child)::after {
    content: '';
    top: 50%;
    left: 100% ;
    position: absolute ;
    width: 120px ;
    height: 2px ;
    background-color: ${props => props.active ? 'black' : 'lightgrey'};
  }
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
    text-align:center ;
    color: ${props => (props.active ? 'black' : 'grey')};
  }
  & .complete-logo {
    display:${props => props.step > props.stepNumber ? 'block' : 'none'};
  }
}

`

export default function StepperBars(props) {
  return (
    <StepperBarStyle active={props.active} step={props.step} stepNumber={props.stepNumber}>
      <span className="progress-group" data-phase={props.phase}>
        <span className="progress-icon">
          <span className="text"><p>{props.stepNumber}</p></span>
          <img src={compelteLogo} className="complete-logo" alt="logo" />
        </span>
        <span className="progress-label">{props.stepLabel}</span>
      </span>

    </StepperBarStyle>

  )
}