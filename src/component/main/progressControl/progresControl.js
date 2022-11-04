import styled from "styled-components"
import rightArrow from "../../icons/right-arrow.svg"
const ProgressStyle = styled.div`
width: 100%;
margin-top: 24px ;
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
  :hover {
    cursor: pointer;
  }
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
   :hover {
    cursor: pointer;
  }
  visibility:  ${props => (props.step !== 1 ? 'visible' : 'hidden')};
}

`

function ProgressControl(props) {
  const stepCopy = props.step
  function onClickNextBtn() {
    // 表單頁數狀態設定
    if (stepCopy < 3) {
      const setStep = props.event
      setStep(stepCopy + 1)
    }
  }
  function onClickPreBtn() {
    // 表單頁數狀態設定
    const setStep = props.event
    setStep(stepCopy - 1)
  }
  return (
    <section className="progress-control-container">
      <ProgressStyle step={props.step}>
        <section className="button-group" data-phase={props.phase}>
          <button className="pre" onClick={onClickPreBtn}>
            上一步
          </button>
          <button className="next" onClick={onClickNextBtn}>
            {props.step !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
          </button>
        </section>
      </ProgressStyle>
    </section>

  )
}
export default ProgressControl