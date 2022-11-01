export default function StepperBars(props) {
  return (
    <span class="progress-group" data-phase={props.stepName}>
      <span class="progress-icon">
        <span class="text">{props.stepNumber}</span>
        <svg class="icon cursor-point">
          <use xlink:href="#svg-icon-pg-complete"></use>
        </svg>
      </span>
      <span class="progress-label">{props.stepLabel}</span>
    </span>
  )
}