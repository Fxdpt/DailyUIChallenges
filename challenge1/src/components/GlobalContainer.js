import React from "react"
import Grid from "@material-ui/core/Grid"
import RegisterFormContainer from "./RegisterFormContainer"
import InfoContainer from "./InfoContainer"
import Box from '@material-ui/core/Box'

function GlobalContainer() {
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor="background.paper"
      css={{ height: '100vh' }}
    >
      <Grid container spacing={0}>
        <RegisterFormContainer />
        <InfoContainer />
      </Grid>
    </Box>
  );
}

export default GlobalContainer
