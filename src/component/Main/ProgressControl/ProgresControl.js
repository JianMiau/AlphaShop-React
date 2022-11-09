import styled from 'styled-components'
import rightArrow from '../../../icons/right-arrow.svg'
const ProgressStyle = styled.div`
width: 100%;
padding-bottom: 50px;
& .button-group {
  display: flex ;
  justify-content: space-between ;
}
& .next {
  background-color: #F67599 ;
  color: white;
  text-align: center ;
  line-height: 46px ;
  width: 35% ;
  height: 46px ;
  border-radius: 8px;
  border-color: transparent ;
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
  width: 35% ;
  height: 46px ;
  border-radius: 8px;
  font-size: 1.5rem ;
  margin-top: 24px ;
  border-color: transparent ;
  outline: none ;
   :hover {
    cursor: pointer;
  }
  visibility:  ${props => (props.step !== 1 ? 'visible' : 'hidden')};
}
/*大於800px 主頁面會切到gird排版，按鈕padding需要調整*/
@media (min-width: 800px) {
padding-bottom: 0;
}
/*大於1200px 按鈕調整寬度*/
@media (min-width: 1200px) {
& .pre, .next {
  width: 25% ;
}
}
`
function ProgressControl(props) {

  const stepCopy = props.step

  function onClickNextBtn() {
    const setStep = props.onClick
    // 表單頁數狀態設定
    if (stepCopy < 3) {
      setStep(stepCopy + 1)
    }
    else if (stepCopy === 3) {
      alert('已經確認下單~感謝您的光顧')
      //回到首頁，之後學到useEffect再送至資料庫
      setStep(1)
    }
  }
  function onClickPreBtn() {
    // 表單頁數狀態設定
    const setStep = props.onClick
    setStep(stepCopy - 1)
  }
  return (
    <section className='progress-control-container'>
      <ProgressStyle step={props.step}>
        <section className='button-group' data-phase={props.phase}>
          <button className='pre' onClick={onClickPreBtn}>
            上一步
          </button>
          <button className='next' onClick={onClickNextBtn}>
            {props.step !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
          </button>
        </section>
      </ProgressStyle>
    </section>

  )
}
export default ProgressControl
