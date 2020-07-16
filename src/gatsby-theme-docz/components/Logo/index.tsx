import React from 'react';
import logoLight from './dropbox-logo.svg';
import logoDark from './dropbox-logo-dark.svg';

interface Props {
  color: string;
}

export const Logo = (props: Props) => 
  <img src={props.color === 'light' ? logoLight : logoDark} alt="Dropbox logo" style={{height: '50px'}}/>;
