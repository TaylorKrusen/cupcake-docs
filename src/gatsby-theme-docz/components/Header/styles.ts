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