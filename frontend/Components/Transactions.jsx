import TransactionCard from "./TransactionCard";

const Transactions = () => {
    return (
        <>
            <div id="transaction" className="gradient-bg-transactions">
                <div className="container">
                    <h1>Connect your account to see the latest transactions</h1>
                    <div className="cards">
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                        <div className="card">
                            <TransactionCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transactions;