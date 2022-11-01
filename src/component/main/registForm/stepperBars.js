import styled from "styled-components"
const StepperBarStyle = styled.div`
margin: 0;
.progress-group {
  display: flex ;
  font-size: 1.2rem ;
  & .progress-icon {
    width:20% ;
  }
  & .progress-label {
    width: 80% ;
  }
}

`

export default function StepperBars(props) {
  return (
    <StepperBarStyle>
      <span className="progress-group" data-phase={props.phase}>
        <span className="progress-icon">
          <span className="text">{props.stepNumber}</span>
          <svg className="icon cursor-point">
            { /* <use xlink:href="#svg-icon-pg-complete"></use> */}
          </svg>
        </span>
        <span className="progress-label">{props.stepLabel}</span>
      </span>

    </StepperBarStyle>

  )
}