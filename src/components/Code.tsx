/** @jsx jsx */
/* eslint react/jsx-key: 0 */
import {jsx, Styled} from 'theme-ui';

export default function Code({children}) {
  return <Styled.pre className="code-block">{children}</Styled.pre>;
}
