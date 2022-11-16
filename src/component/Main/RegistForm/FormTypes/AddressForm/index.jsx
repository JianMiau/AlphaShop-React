import Input from '../Input'
import SelectInput from '../SelectInput'
import FormStyle from '../../../../Styles/Common/FormStyle'
import { useState } from 'react'
import { useFormData, useFormDispatch } from '../../../../Context/FormContext'
import { useEffect } from 'react'

const gender = [
  { id: 'default', title: '稱謂' },
  { id: 'mr', title: '先生' },
  { id: 'ms', title: '小姐' },
  { id: 'mx', title: '不明' }
]
const location = [
  { id: 'defult', title: '請選擇縣市' },
  { id: 'KLU', title: '基隆市' },
  { id: 'TPH', title: '新北市' },
  { id: 'TPE', title: '台北市' },
  { id: 'TYC', title: '桃園市' },
  { id: 'HSH', title: '新竹縣' },
  { id: 'HSC', title: '新竹市' },
  { id: 'TXG', title: '台中市' }
]
function AddressForm() {
  // Context傳來的資料區
  const dispatch = useFormDispatch()
  const initialInput = useFormData().form[1]
  // 紀錄表單輸入時資料(受控表單元件模式)，初始狀態用Context Form資料，不然返回會重置
  const [input, setInput] = useState(initialInput)
  // 將使用者資料更新至頂層Context狀態儲存，但覺得不是最好作法...每次onChange表單都重刷...但因為最後需要Progress Control透過Context來抓到使用者所有表單資料
  useEffect(() => {
    dispatch({ type: 'updateForm', text: input })
  }, [input])
  return (
    <FormStyle>
      <form className='form' data-phase='address'>
        <h3 className='form-title'>寄送地址</h3>
        <section className='form-body'>
          <div className='form-row'>
            <SelectInput width={35} label='稱謂' data={gender} event={setInput} name='title' input={input} defaultValue={'先生'} value={initialInput.title} />
            <Input width={65} label='姓名' type='text' placeholder='請輸入姓名' event={setInput} name='name' input={input} value={input.name} />
          </div>
          <div className='form-row'>
            <Input width={48} right={2} label='電話' type='tel' placeholder='請輸入電話' event={setInput} name='tel' input={input} value={input.tel} />
            <Input width={50} label='E-mail' type='email' placeholder='請輸入信箱' event={setInput} name='email' input={input} value={input.email} />
          </div>
          <div className='form-row'>
            <SelectInput width={35} label='縣市' data={location} event={setInput} name='city' input={input} value={input.city} />
            <Input width={65} label='地址' type='adress' placeholder='請輸入地址' event={setInput} name='address' input={input} value={input.address} />
          </div>
        </section>
      </form>
    </FormStyle>
  )
}
export default AddressForm
