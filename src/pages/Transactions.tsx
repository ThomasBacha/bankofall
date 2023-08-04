import React from 'react';
import Header from '../components/Header'; // Update the path based on your actual file structure

const Transactions: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h1>Transaction History</h1>
                        {/* Add your transaction history component or content here */}
                        <p>Implement your transaction history component here</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transactions;
