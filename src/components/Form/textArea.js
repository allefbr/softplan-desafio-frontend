import React from 'react'
import classnames from 'classnames'
 
const InputFeedback = ({ children }) => (
  <span className="text-danger">{children}</span>
)
 
const Label = ({ error, children, ...props }) => (
 <label {...props}>{children}</label>
)
 
const TextArea = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  label,
  ...props
}) => {
  const error = errors[name]
  const touch = touched[name]
  const classes = classnames(
    'form-group',
    {
      'animated shake error': !!error,
    },
    className
  )
  return (
    <div className={classes}>
      <Label htmlFor={name} error={error}>{label}</Label>
      <textarea
        id={name}
        className="form-control"
        type="text"
        {...field}
        {...props}
      ></textarea>
      {touch && error && <InputFeedback>{error}</InputFeedback>}
    </div>
  )
}
 
export default TextArea