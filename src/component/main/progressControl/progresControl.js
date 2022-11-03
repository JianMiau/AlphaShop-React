import styled from "styled-components"
import ProgressPhase from "./progressPhase"
const ProgressStyle = styled.div`
width: 100%;
margin-top: 24px ;

`

function ProgressControl(props) {
  return (
    <section className="progress-control-container">
      <ProgressStyle>
        <ProgressPhase step={props.step} event={props.event} phase='adresss' />
      </ProgressStyle>
    </section>

  )
}
export default ProgressControl