import styled from "styled-components"
import compelteLogo from "../../icons/pg-complete.svg"
const StepperBarStyle = styled.div`
margin: 0;
position: relative ;
  &:not(:last-child)::after {
    content: '';
    top: 50%;
    left: 120% ;
    position: absolute ;
    width: 120px ;
    height: 2px ;
    background-color: black ;
  }
.progress-group {
  display: flex ;
  font-size: 1.2rem ;
  align-items: center ;
 
  & .progress-icon {
    width:20% ;
    margin-right: 5px ;
    & .text p{
      width: 25px ;
      height: 25px;
      border-radius: 50% ;
      text-align:center ;
      background-color: black ;
      color: white ;
      margin-right: 5px ;
    }
  }
  & .progress-label {
    width: 80% ;
    text-align:center ;
  }
}

`

export default function StepperBars(props) {
  return (
    <StepperBarStyle>
      <span className="progress-group" data-phase={props.phase}>
        <span className="progress-icon">
          <span className="text"><p>{props.stepNumber}</p></span>
          {/* <img src={compelteLogo} className="complete-logo" alt="logo" /> */}
        </span>
        <span className="progress-label">{props.stepLabel}</span>
      </span>

    </StepperBarStyle>

  )
}