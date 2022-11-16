import RadioInput from '../RadioInput'
import FormStyle from '@/component/Styles/Common/FormStyle'
import { useState } from 'react'
import { useEffect } from 'react'
import { useFormDispatch } from '@/component/Context/FormContext'


function ShippingForm() {
  const dispatch = useFormDispatch()
  // 紀錄表單輸入時資料(受控表單元件模式)
  const [input, setInput] = useState({ shipping: 'standard' })
  useEffect(() => {
    dispatch({ type: 'updateForm', text: input })
  }, [input])
  return (
    <FormStyle>
      <form className='form' data-phase='shipping'>
        <h3 className='form-title'>運送方式</h3>
        <section className='form-body'>
          <div className='form-row'>
            <RadioInput width={100} price='免費' title='標準運送' content='約3~7個工作天' value='standard' check={true} input={input} event={setInput} />
          </div>
          <div className='form-row'>
            <RadioInput width={100} price='$500' title='DHL貨運' value='DHL' content='48小時內送達' input={input} event={setInput} />
          </div>
        </section>
      </form>
    </FormStyle>

  )
}
export default ShippingForm
