import { Box, Container, Link, Typography, styled } from '@mui/material'
import React from 'react'

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(0)};
`
)

function Footer () {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={2}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
        bottom={0}
      >
        <Box>
          <Typography variant="subtitle1">
            &copy; 2023 - Lucas TVS Limited
          </Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
         Site developed and maintained Lucas TVS - IT
        </Typography>
      </Box>
    </FooterWrapper>
  )
}

export default Footer
