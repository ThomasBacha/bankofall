import React from 'react';
import { Container, Grid } from '@mui/material'; // Make sure to import any necessary Material-UI components
import Header from '../components/Header'; // Update the path based on your actual file structure

const Transactions: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h1>Transaction History</h1>
                        {/* Add your transaction history component or content here */}
                        <p>Implement your transaction history component here</p>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Transactions;
