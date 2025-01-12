import React from 'react'

const Checkbox = ({
  label,
  checked,
  onChange,
  className = '',
  name,
  required,
}) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        required={required}
        className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  )
}

export default Checkbox
