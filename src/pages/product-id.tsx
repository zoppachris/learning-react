import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const productId = () => {
  return (
    <Container maxWidth="md">
      <Typography component="h1" variant="h2" align="center">
        Product
      </Typography>
      <Paper elevation={1}>
        <Grid
          container
          direction="column"
          sx={{
            padding: 2
          }}
        >
          <Typography component="h2" variant="h4" align="left">
            Product
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};

export default productId;
