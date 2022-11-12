import Input from '../Input'
import SelectInput from '../SelectInput'
import FormStyle from '../../../../Styles/Common/FormStyle'

const gender = [
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
  return (
    <FormStyle>
      <form className='form' data-phase='address'>
        <h3 className='form-title'>寄送地址</h3>
        <section className='form-body'>
          <div className='form-row'>
            <SelectInput width={35} label='稱謂' data={gender} />
            <Input width={65} label='姓名' type='text' placeholder='請輸入姓名' />
          </div>
          <div className='form-row'>
            <Input width={48} right={2} label='電話' type='tel' placeholder='請輸入電話' />
            <Input width={50} label='E-mail' type='email' placeholder='請輸入信箱' />
          </div>
          <div className='form-row'>
            <SelectInput width={35} label='縣市' data={location} />
            <Input width={65} label='地址' type='adress' placeholder='請輸入地址' />
          </div>
        </section>
      </form>
    </FormStyle>
  )
}
export default AddressForm
