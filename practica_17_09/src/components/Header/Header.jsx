import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box>
        <Box component={Link}  to={'/'}>
        Volver
        </Box>
    </Box>
)
}

export default Header