import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import './Cards.css';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    console.log(confirmed);
    if (!confirmed) {
        return 'Loading..'
    }
    return (

        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={9} md={3} className="card infected">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><b>Infected</b></Typography>
                        <Typography variant="h5"><CountUp start={1} end={confirmed.value} duration={2.5} separator="," /> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={9} md={3} className="card recovered">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><b>Recovered</b></Typography>
                        <Typography variant="h5"><CountUp start={1} end={recovered.value} duration={2.5} separator="," /> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={9} md={3} className="card deaths">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom><b>Deaths</b></Typography>
                        <Typography variant="h5"><CountUp start={1} end={deaths.value} duration={2.5} separator="," /> </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
