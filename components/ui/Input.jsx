const Input = ({ id, label, error, className = '', ...props }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      {label && (
        <label htmlFor={id} className="text-base font-medium">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full py-3 bg-transparent border-b ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:outline-none focus:border-gold`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  )
}

export default Input
