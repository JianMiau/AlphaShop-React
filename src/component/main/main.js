import RegistForm from "./registForm/registForm"

export default function Main(props) {
  return (
    <footer className="main">
      <div className="main-container">
        <RegistForm title='結帳' />
        {props.children}
      </div>
    </footer>
  )
}