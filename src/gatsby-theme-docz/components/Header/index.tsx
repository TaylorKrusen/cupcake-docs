/** @jsx jsx */
import {jsx, Box, Flex, useColorMode} from 'theme-ui';
import {useConfig, useCurrentDoc} from 'docz';
import { useStaticQuery, graphql } from 'gatsby';

import {wrapper, innerContainer, headerLink, headerButton, editButton} from './styles';
import {Edit, Sun, Github} from 'gatsby-theme-docz/src/components/Icons';
import {Logo} from '../Logo';

export const Header = () => {
  const config = useConfig();
  const {edit = true, ...doc} = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          headerLinks {
            text
            link
          }
        }
      }
    }
  `);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div sx={wrapper}>
      <div sx={innerContainer}>
        <Logo color={colorMode}/>
        <Flex sx={{alignItems: "center"}}>
          {config.repository && (
            <Box sx={{mr: 2}}>
              <a
                href={config.repository}
                sx={headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          {site.siteMetadata.headerLinks.map((link) => (
            <a href={link.link} sx={{textDecoration: 'none'}}>
              <span sx={headerLink}>{link.text}</span>
            </a>
          ))}
          <button sx={headerButton} onClick={toggleColorMode}>
            <Sun size={15} />
          </button>
        </Flex>
        {edit && doc.link && (
          <a sx={editButton} href={doc.link} target="_blank" rel="noopener noreferrer">
            <Edit width={14} />
            <Box sx={{pl: 2}}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  );
};
