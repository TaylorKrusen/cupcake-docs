import * as mixins from 'gatsby-theme-docz/src/utils/mixins';
import {SystemStyleObject} from '@styled-system/css';

export const wrapper: SystemStyleObject = {
  bg: 'header.bg',
  position: 'relative',
  borderBottom: (t: any) => `1px solid ${t.colors.border}`,
};

export const innerContainer: SystemStyleObject = {
  ...mixins.centerAlign,
  px: 4,
  py: '10px',
  position: 'relative',
  justifyContent: 'space-between',
  padding: '18px',
};

export const headerLink: SystemStyleObject = {
  marginRight: '34px',
  fontSize: '18px',
  color: 'header.text',
  ':hover': {
    opacity: 0.5,
  },
};

export const headerLinkDark: SystemStyleObject = {};

export const headerBoxButton: SystemStyleObject = {
  border: '1.2px #CED4DE solid',
  padding: '0 18px',
  marginRight: '34px',
  backgroundColor: 'transparent',
  lineHeight: 2,
  fontSize: '14px',
  textDecoration: 'none',
  color: 'header.text',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: '#eaeaea',
    borderColor: 'gray',
  },
};

export const headerButton: SystemStyleObject = {
  ...mixins.centerAlign,
  outline: 'none',
  p: '12px',
  border: 'none',
  borderRadius: 9999,
  bg: 'header.button.bg',
  color: 'header.button.color',
  fontSize: 0,
  fontWeight: 600,
  ':hover': {
    cursor: 'pointer',
  },
};

export const editButton: SystemStyleObject = {
  ...mixins.centerAlign,
  position: 'absolute',
  bottom: -40,
  right: 30,
  bg: 'transparent',
  color: 'muted',
  fontSize: 1,
  textDecoration: 'none',
  borderRadius: 'radius',
};
