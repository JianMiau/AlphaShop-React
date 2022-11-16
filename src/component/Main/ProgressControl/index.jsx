import ProgressControlStyle from "./ProgressControlStyle.js"
import rightArrow from '@/icons/right-arrow.svg'
import { useFormData, useFormDispatch } from '@/component/Context/FormContext'
import { useCartData } from '@/component/Context/CartContext'
function ProgressControl(props) {
  const currentStep = useFormData().currentPage
  const formData = useFormData().form
  const dispatch = useFormDispatch()
  const cartData = useCartData()
  // 下一步按鈕
  function onClickNextBtn() {
    if (currentStep < 3) {
      dispatch({ type: 'nextPage', pageNumber: currentStep })
    }
    else if (currentStep === 3) {
      const name = formData[1].name
      const address = formData[1].address
      const shipping = formData[2].shipping
      const cardTitle = formData[3].cardTitle
      const cardNumber = formData[3].cardNumber
      const cardValidDate = formData[3].cardValidDate
      const cardCCV = formData[3].cardCCV
      const totalPrice = cartData.find(item => item.id === 'total').totalPrice
      alert(`聯絡資訊----------
      \r姓名: ${name}
      \r運送地址: ${address}
      \r運送方式: ${shipping}
      \r付款資訊----------
      \r卡片持有人: ${cardTitle}
      \r卡號: ${cardNumber}
      \r卡片到期日: ${cardValidDate}
      \r安全碼: ${cardCCV}
      \r--------------
      \r本次消費總金額: ${totalPrice}`)
    }
  }
  function onClickPreBtn() {
    // 表單頁數狀態設定
    dispatch({ type: 'previousPage', pageNumber: currentStep })
  }
  return (
    <section className='progress-control-container'>
      <ProgressControlStyle step={currentStep}>
        <section className='button-group'>
          <button className='pre' onClick={onClickPreBtn}>
            上一步
          </button>
          <button className='next' onClick={onClickNextBtn}>
            {currentStep !== 3 ? <div>下一步 <img src={rightArrow} alt='right-arrow' /></div> : '確認下單'}
          </button>
        </section>
      </ProgressControlStyle>
    </section>

  )
}
export default ProgressControl
