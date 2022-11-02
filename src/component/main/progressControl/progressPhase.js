import styled from "styled-components"
const ProgressStyle = styled.div`
width: 100% ;
& .button-group {
  display: flex ;
  justify-content: flex-end ;
}
& .next {
  background-color: #FFC0CB ;
  width: 25% ;
  border-radius: 15px;
  font-size: 1rem ;
}
`

function ProgressPhase(props) {
  return (
    <ProgressStyle>
      <section className="button-group" data-phase={props.phase}>
        <button className="next">
          <p>{props.nextBtn}</p>
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-right-arrow"></use>
          </svg> */}
        </button>
      </section>
    </ProgressStyle>

  )
}

export default ProgressPhase