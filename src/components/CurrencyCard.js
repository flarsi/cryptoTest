import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "./CustomCard";

export default function CurrencyCard({
  id,
  name,
  current_price,
  high_24h,
  low_24h,
}) {
  const navigate = useNavigate()
  return (
    <CustomCard
      name={name}
      component={
        <ul>
          <li>Current Price: {current_price}</li>
          <li>24h High: {high_24h}</li>
          <li>24h Low: {low_24h}</li>
        </ul>
      }
      cardActions={
        <Button size="small" onClick={() => navigate(`/currencyInfo/${id}`)}>
          More
        </Button>
      }
    />
  );
}
