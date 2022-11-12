import SelectInputWrapStyle from "./SelectInputWrapStyle"

function SelectInput(props) {
  return (
    <SelectInputWrapStyle width={props.width}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <div className='select-container'>
          <select required>
            {props.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
      </div>
    </SelectInputWrapStyle>
  )
}
export default SelectInput
