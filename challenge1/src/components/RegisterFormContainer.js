import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  Button
} from "@material-ui/core";
import Title from "./Title";

const styles = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center"
};

const flexColumn = {
  display: "flex",
  flexDirection: "column"
};

function RegisterFormContainer() {
  return (
    <Grid item xs={3}>
      <div style={styles}>
        <Container>
          <Title text="Inscription" size={1} color="red" />
          <form style={flexColumn}>
            <FormControl>
              <InputLabel htmlFor="my-input">Adresse e-mail</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Nous ne transmettrons jamais votre adresse.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Min. 8 caractères / Max. 25 caractères
              </FormHelperText>
            </FormControl>
            <Button variant="contained" size="large" color="primary" classes= {{ sizeLarge: 'btnSubmit'}}>
              MET MOI LA SAUCISSE
            </Button>  
          </form>
        </Container>
      </div>
    </Grid>
  );
}

export default RegisterFormContainer;
