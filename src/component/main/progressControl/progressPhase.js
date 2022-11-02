import styled from "styled-components"
import rightArrow from "../../icons/right-arrow.svg"
const ProgressStyle = styled.div`
width: 100% ;
& .button-group {
  display: flex ;
  justify-content: space-between ;
}
& .next {
  background-color: #F67599 ;
  color: white; 
  text-align: center ;
  line-height: 46px ;
  width: 25% ;
  height: 46px ;
  border-radius: 8px;
  font-size: 1.5rem ;
  margin-top: 24px ;
}
& .pre {
  background-color: transparent;
  text-align: center ;
  line-height: 46px ;
  width: 25% ;
  height: 46px ;
  border-radius: 8px;
  font-size: 1.5rem ;
  margin-top: 24px ;
  visibility:  ${props => (props.step !== 1 ? 'visible' : 'hidden')};
}
`

function ProgressPhase(props) {
  return (
    <ProgressStyle step={props.step}>
      <section className="button-group" data-phase={props.phase}>
        <button className="pre">
          上一步
        </button>
        <button className="next">
          {props.step !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
        </button>
      </section>
    </ProgressStyle>

  )
}

export default ProgressPhase