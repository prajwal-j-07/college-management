import React from "react"

const variants = {
  primary: "",
  secondary: "",
}

/*
    Button component
    * @param {string} title - Button title
    * @param {function} onClick - Button click event
    * @param {string} className - Button class name
    * @param {boolean} disabled - Button disabled
    * @param {string} textClassName - Button text class name
    * @param {string} variant - Button variant
    * @param {node} children - Button children
    * @param {string} type - Button type
    * @param {object} style - Button style
    * @param {object} properties - ${React.ButtonHTMLAttributes<HTMLButtonElement>}
    * @returns {React.Component} - Button component
*/
const Button = ({
  title,
  onClick,
  className = "",
  disabled = false,
  textClassName = "",
  variant = "primary",
  children,
  type,
  style,
  ...properties
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`${BASE_CLASS} ${variant && variants[variant]} ${className}`}
      {...properties}
    >
      {children && children}
      {title && <p className={` ${textClassName}`}>{title}</p>}
    </button>
  )
}

export default Button
