import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "./CustomCard";

export default function CurrencyInfoCard({
  ath,
  name,
  current_price,
  market_cap,
  market_cap_rank,
}) {
  const navigate = useNavigate()
  return (
    <CustomCard
      name={name}
      component={
        <ul>
          <li>Current Price: {current_price}</li>
          <li>All time high price: {ath}</li>
          <li>Market Cap: {market_cap}</li>
          <li>Market Cap Rank: {market_cap_rank}</li>
        </ul>
      }
      cardActions={
        <Button size="small" onClick={() => navigate(`/`)}>
          Home
        </Button>
      }
    />
  );
}
