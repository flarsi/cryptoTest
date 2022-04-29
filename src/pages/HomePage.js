import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { useQuery } from "react-query";
import Card from "../components/CurrencyCard";
import fetchCurrencies from "../queries/fetch-currencies";
import { CircularProgress } from "@mui/material";

const theme = createTheme();

export default function HomePage() {
  const {
    isLoading,
    error,
    data: currencies,
  } = useQuery("currencies", fetchCurrencies);
  return (
    <Grid container spacing={4} justifyContent={"center"}>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Market Pairs (USD)
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            The following is a list of crypto currencies with information
            related to the USD trading pair.
          </Typography>
        </Container>
      </Box>
      {!isLoading ? (
        currencies?.map((currency) => (
          <Grid item key={currency.id} xs={12} sm={6} md={4}>
            <Card {...currency} />
          </Grid>
        ))
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
}
