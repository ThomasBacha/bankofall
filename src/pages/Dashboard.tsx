import React from 'react';
import AccountSummary from '../components/AccountSummary';
import FullScreenBackground from './FullScreen';

const Dashboard: React.FC = () => {
    const accountBalance = 5000.0; // Replace with your data source

    const buttonStyling: React.CSSProperties = {
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
    };

    return (
        <>
            <FullScreenBackground>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <AccountSummary balance={accountBalance} />
                    </div>
                    <div className="col-12 text-center">
                        <button className="btn btn-primary" style={buttonStyling}>
                            Make a Deposit
                        </button>
                        <button className="btn btn-secondary" style={buttonStyling}>
                            Make a Withdrawal
                        </button>
                        
                    </div>
                </div>
            </div>
            </FullScreenBackground>
        </>
    );
};

export default Dashboard;
