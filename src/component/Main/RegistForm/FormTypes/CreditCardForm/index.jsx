import Input from '../Input'
import FormStyle from '@/component/Styles/Common/FormStyle'
import { useEffect, useState } from 'react'
import { useFormDispatch } from '@/component/Context/FormContext'
function CreditCardForm() {
  // Context傳來的資料區
  const dispatch = useFormDispatch()
  // 紀錄表單輸入時資料(受控表單元件模式)
  const [input, setInput] = useState({})
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
            <Input width={100} label='持卡人姓名' type='text' placeholder='Joe Doe' event={setInput} name='card-title' input={input} />
          </div>
          <div className='form-row'>
            <Input width={100} label='卡號' type='text' placeholder='1111 2222 3333 4444' maxlength={12} event={setInput} name='card-number' input={input} />
          </div>
          <div className='form-row'>
            <Input width={48} right={2} label='有效期限' type='text' placeholder='MM/YY' event={setInput} name='card-validDate' input={input} />
            <Input width={50} label='CVC/CCV' type='text' placeholder='123' maxlength={3} vent={setInput} name='card-CCV' input={input} />
          </div>
        </section>
      </form>
    </FormStyle>
  )
}
export default CreditCardForm
