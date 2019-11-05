import React from 'react'
import t from 'prop-types'

class Params extends React.Component {
  render() {
    return null
    // ... do things with the props
  }
}

Params.propTypes = {
  /** A unique identifier for the file. */
  path: t.string,
  /** If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders. The default for this field is False.  */
  recursive: t.bool,
  hello:"world"
}
// Button.defaultProps = {
//   path: '/test',
// }
export default Params