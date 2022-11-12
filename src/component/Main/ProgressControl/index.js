import ProgressControlStyle from "./ProgressControlStyle.js"
import rightArrow from '../../../icons/right-arrow.svg'
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
      <ProgressControlStyle step={props.step}>
        <section className='button-group' data-phase={props.phase}>
          <button className='pre' onClick={onClickPreBtn}>
            上一步
          </button>
          <button className='next' onClick={onClickNextBtn}>
            {props.step !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
          </button>
        </section>
      </ProgressControlStyle>
    </section>

  )
}
export default ProgressControl
