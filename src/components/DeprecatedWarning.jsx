/** @jsx jsx */
import React from 'react'
import { jsx, Box, Flex, useColorMode } from 'theme-ui'

export default function(props) {
    const {deprecatedBy} = props;
    return <Box sx={{backgroundColor: 'red'}}>WARNING: This API is deprecated.{!!deprecatedBy ? 
        <>Use {deprecatedBy} instead.</> : null}</Box>
}