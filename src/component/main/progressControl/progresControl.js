import styled from "styled-components"
import ProgressPhase from "./progressPhase"
const ProgressStyle = styled.div`
width: 100%;

`

function ProgressControl() {
  return (
    <section className="progress-control-container">
      <ProgressStyle>
        <ProgressPhase phase='adresss' nextBtn='下一步' />
      </ProgressStyle>
    </section>

  )
}
export default ProgressControl