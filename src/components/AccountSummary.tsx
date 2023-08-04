import React from 'react';

interface AccountSummaryProps {
    balance: number;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ balance }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title">Account Summary</h6>
                <p className="card-text">Balance: ${balance.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default AccountSummary;
