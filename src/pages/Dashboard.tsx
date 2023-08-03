import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import Header from '../components/Header';
import AccountSummary from '../components/AccountSummary';

const Dashboard: React.FC = () => {
    const accountBalance = 5000.0; // Replace with your data source

const ButtonStyling: React.CSSProperties = {
    margin: "10px",
    padding: "10px",
    width: "200px",
    height: "100px",
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "blue",
    border: "none",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px grey",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",


        
}


    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} textAlign="center">
                        <AccountSummary balance={accountBalance} />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Button  style= {ButtonStyling} variant="contained" color="primary">
                            Make a Deposit
                        </Button>
                        <Button style={ButtonStyling} variant="contained" color="secondary">
                            Make a Withdrawal
                        </Button>


                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Dashboard;
