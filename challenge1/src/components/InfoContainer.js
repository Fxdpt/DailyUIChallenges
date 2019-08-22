import React from "react";
import { Grid } from "@material-ui/core"
import Title from './Title'

const background = 'https://photos.lci.fr/images/1280/720/barbecue-faut-il-piquer-ses-saucisses-6bb6fa-0@1x.jpeg'

const styles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'

}

function InfoContainer() {
  return (
    <Grid item xs={9}>
      <div style={styles}>
      <Title size={1} text="Foire à la saucisse de Morteau" customClass="white"></Title>
      </div>
      
    </Grid>
  );
}

export default InfoContainer;
