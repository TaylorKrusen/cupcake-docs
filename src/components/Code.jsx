/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import { jsx, Styled } from 'theme-ui'


export default function Code ({ children }) {

  return (
        <Styled.pre
            style={{backgroundColor: 'lightgray', borderRadius: '2px', overflow: 'auto'}}
        >
            {children}
        </Styled.pre>
  )
}
