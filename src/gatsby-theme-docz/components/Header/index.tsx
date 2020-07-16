/** @jsx jsx */
import {jsx, Box, Flex, useColorMode} from 'theme-ui';
import {useConfig, useCurrentDoc} from 'docz';

import {wrapper, innerContainer, headerButton, editButton} from './styles';
import {Edit, Sun, Github} from 'gatsby-theme-docz/src/components/Icons';
import {Logo} from '../Logo';

export const Header = () => {
  const config = useConfig();
  const {edit = true, ...doc} = useCurrentDoc();
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  return (
    <div sx={wrapper}>
      <div sx={innerContainer}>
        <Logo />
        <Flex>
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
