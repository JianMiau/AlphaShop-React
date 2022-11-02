export default function Option(props) {
  return (
    <>
      {props.data.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
    </>
  )
}