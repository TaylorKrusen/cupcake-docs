import React from 'react'
import t from 'prop-types'

const Button = ({ children, type }) => <button type={type}>{children}</button>

Button.propTypes = {
  /**
   * This is a description for this prop.
   * Button type.
   */
  type: t.oneOf(['button', 'submit', 'reset']),
}
Button.defaultProps = {
  type: 'button',
}
export default Button