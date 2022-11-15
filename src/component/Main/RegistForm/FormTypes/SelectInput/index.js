import SelectInputWrapStyle from "./SelectInputWrapStyle"

function SelectInput(props) {
  // 掛上onChange事件，傳回輸入值
  const setInput = props.event
  const input = props.input
  return (
    <SelectInputWrapStyle width={props.width}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <div className='select-container'>
          <select required name={props.name} onChange={(e) => {
            setInput({
              ...input,
              [e.target.name]: e.target.value
            })
          }} >
            {props.data.map(item => <option key={item.id} value={item.title}>{item.title}</option>)}
          </select>
        </div>
      </div>
    </SelectInputWrapStyle>
  )
}
export default SelectInput
