/** @jsx jsx */
import { jsx, Box, Flex, useColorMode } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'
import { useStaticQuery, graphql } from 'gatsby'

import * as styles from './styles'
import { Edit, Sun, Github } from '../Icons'
import { Logo } from '../Logo'


export const Header = () => {
  const config = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  const [colorMode, setColorMode] = useColorMode()

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }
  
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

  return (
    <div sx={styles.wrapper}>
      <div sx={styles.innerContainer}>
        <Logo />
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {config.repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={config.repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
          {site.siteMetadata.headerLinks.map((headerLink) => (
            <a href={headerLink.link} sx={{textDecoration: 'none'}}>
              <span sx={styles.headerLink}>{headerLink.text}</span>
            </a>
          ))}
          <button sx={styles.headerButton} onClick={toggleColorMode}>
            <Sun size={15} />
          </button>
        </Flex>
        {edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  );
}