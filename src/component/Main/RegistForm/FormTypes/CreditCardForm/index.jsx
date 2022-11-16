import Input from '../Input'
import FormStyle from '@/component/Styles/Common/FormStyle'
import { useEffect, useState } from 'react'
import { useFormData, useFormDispatch } from '@/component/Context/FormContext'
function CreditCardForm() {
  // Context傳來的資料區
  const dispatch = useFormDispatch()
  const initialInput = useFormData().form[3]
  // 紀錄表單輸入時資料(受控表單元件模式)
  const [input, setInput] = useState(initialInput)
  // 使用useEffect，當input變動時，呼叫dispatch傳入Context儲存
  useEffect(() => {
    dispatch({ type: 'updateForm', text: input })
  }, [input])

  return (
    <FormStyle>
      <form className='form' data-phase='credit-card'>
        <h3 className='form-title'>付款資訊</h3>
        <section className='form-body'>
          <div className='form-row'>
            <Input width={100} label='持卡人姓名' type='text' placeholder='Joe Doe' event={setInput} name='cardTitle' input={input} value={input.cardTitle} />
          </div>
          <div className='form-row'>
            <Input width={100} label='卡號' type='text' placeholder='1111 2222 3333 4444' maxlength={12} event={setInput} name='cardNumber' input={input} value={input.cardNumber} />
          </div>
          <div className='form-row'>
            <Input width={48} right={2} label='有效期限' type='text' placeholder='MM/YY' event={setInput} name='cardValidDate' input={input} value={input.cardValidDate} />
            <Input width={50} label='CVC/CCV' type='text' placeholder='123' maxlength={3} event={setInput} name='cardCCV' input={input} value={input.cardCCV} />
          </div>
        </section>
      </form>
    </FormStyle>
  )
}
export default CreditCardForm
