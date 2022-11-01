function RegistForm(props) {
  return (
    <section class="register-container" data-phase="1" data-total-price="0">
      <h2 class="register-title">{props.title}</h2>
      {props.children}
    </section>
  )

}
export default RegistForm