import InputSelectStyle from "./InputSelectStyle"

function SelectInput(props) {
  return (
    <InputSelectStyle width={props.width}>
      <div className='input-group'>
        <div className='input-label'>{props.label}</div>
        <div className='select-container'>
          <select required>
            {props.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select>
        </div>
      </div>
    </InputSelectStyle>
  )
}
export default SelectInput
