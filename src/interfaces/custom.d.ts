declare module '*.svg' {
  const content: string;
  export default content;
}

declare module 'gatsby-theme-docz/src/components/Icons' {
  export {GitHub as Github, Edit, Sun} from 'react-feather';
}

declare module 'gatsby-theme-docz/src/utils/mixins' {
  export const centerAlign: {
    display: 'flex';
    alignItems: 'center';
    justifyContent: 'center';
  };
}
