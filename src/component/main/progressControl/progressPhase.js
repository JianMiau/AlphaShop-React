import styled from "styled-components"
const ProgressStyle = styled.div`
width: 100% ;
& .button-group {
  display: flex ;
  justify-content: flex-end ;
}
& .next {
  background-color: #F67599 ;
  text-align: center ;
  line-height: 46px ;
  width: 25% ;
  height: 46px ;
  border-radius: 8px;
  font-size: 1rem ;
  margin-top: 24px ;
}
`

function ProgressPhase(props) {
  return (
    <ProgressStyle>
      <section className="button-group" data-phase={props.phase}>
        <button className="next">
          {props.nextBtn}
          {/* <svg class="cursor-point">
            <use xlink:href="#svg-icon-right-arrow"></use>
          </svg> */}
        </button>
      </section>
    </ProgressStyle>

  )
}

export default ProgressPhase