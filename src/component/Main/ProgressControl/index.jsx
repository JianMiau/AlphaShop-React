import ProgressControlStyle from "./ProgressControlStyle.js"
import rightArrow from '@/icons/right-arrow.svg'
import { useFormData, useFormDispatch } from '@/component/Context/FormContext'
function ProgressControl(props) {
  const CurrentStep = useFormData().currentPage
  const dispatch = useFormDispatch()
  // 下一步按鈕
  function onClickNextBtn() {
    if (CurrentStep < 3) {
      dispatch({ type: 'nextPage', pageNumber: CurrentStep })
    }
    else if (CurrentStep === 3) {
      alert('已經確認下單~感謝您的光顧')
    }
  }
  function onClickPreBtn() {
    // 表單頁數狀態設定
    dispatch({ type: 'previousPage', pageNumber: CurrentStep })
  }
  return (
    <section className='progress-control-container'>
      <ProgressControlStyle step={CurrentStep}>
        <section className='button-group'>
          <button className='pre' onClick={onClickPreBtn}>
            上一步
          </button>
          <button className='next' onClick={onClickNextBtn}>
            {CurrentStep !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
          </button>
        </section>
      </ProgressControlStyle>
    </section>

  )
}
export default ProgressControl
