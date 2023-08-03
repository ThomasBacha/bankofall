import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface AccountSummaryProps {
  balance: number;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ balance }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Account Summary</Typography>
        <Typography variant="body1">Balance: ${balance.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

export default AccountSummary;
