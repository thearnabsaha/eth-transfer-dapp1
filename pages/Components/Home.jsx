const Home = () => {
    return (
        <>
            <div id="home" className="gradient-bg-welcome">
                <div className="navbar whitespace">
                    <div className="container">
                        <h1>TAS</h1>
                        <ul>
                            <li><a href="https://coinmarketcap.com/">Market</a></li>
                            <li><a href="https://www.binance.com/en">Exchanges</a></li>
                            <li><a href="https://www.coursera.org/search?query=blockchain&">Tutorials</a></li>
                            <li><a href="https://metamask.io/">Wallets</a></li>
                            <li><a href="" className="login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;