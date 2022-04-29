import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import CurrencyInfoCard from '../components/CurrencyInfoCard';
import { useQuery } from 'react-query';
import fetchCurrencies from '../queries/fetch-currencies';
import { CircularProgress } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
function CurrencyInfo() {
    const params = useParams()
    
    const {
        isLoading,
        error,
        data: currencies,
      } = useQuery("currencies", fetchCurrencies);

      const currency = useMemo(() => currencies?.find(({id}) => id === params.id), [currencies]);

    return (
        <Grid container justifyContent={"center"}>
            <CssBaseline />
            <Grid item padding={2} maxWidth={"20vw"}>
                {!isLoading ? <CurrencyInfoCard {...currency}/> : <CircularProgress/>}
            </Grid>
        </Grid>
    );
}

export default CurrencyInfo;