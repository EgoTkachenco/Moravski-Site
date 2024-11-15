const Input = ({ id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} />
    </div>
  )
}

export default Input
