import React from "react";
import Container from "@mui/material/Container";
import Router from "./components/Router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Router />
        </Container>
      </main>
      <Footer />
    </>
  );
}
