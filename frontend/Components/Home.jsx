import { AiFillPlayCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
const Home = () => {
    return (
        <>
            <div id="home" className="gradient-bg-welcome">
                <div className="navbar whitespace">
                    <div className="container">
                        <h1>TAS</h1>
                        <ul>
                            <li><a href="https://coinmarketcap.com/" target="_blank">Market</a></li>
                            <li><a href="https://www.binance.com/en" target="_blank">Exchanges</a></li>
                            <li><a href="https://www.coursera.org/search?query=blockchain&" target="_blank">Tutorials</a></li>
                            <li><a href="https://metamask.io/" target="_blank">Wallets</a></li>
                            <li><a href="" className="login" target="_blank">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main whitespace">
                    <div className="left">
                        <h1 className="text-gradient">Send Crypto across the world</h1>
                        <p>Explore the crypto world. Buy and sell Cryptocurrency easily on kypto</p>
                        <button className="connetBtn"><AiFillPlayCircle className="play"/>Connect Wallet</button>
                        <div className="table">
                            <div className="col">
                                <div className="row row1 rowu">Relibility</div>
                                <div className="row row2 rowu">Security</div>
                                <div className="row row3 rowu">Ethereum</div>
                            </div>
                            <div className="col">
                                <div className="row row4 rowb">Web 3.0</div>
                                <div className="row row5 rowb">Low Fees</div>
                                <div className="row row6 rowb">Blockchain</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="eth-card">
                            <FaEthereum className="ethlogo"/>
                            <BsInfoCircle className="ilogo"/>
                            <div className="ethaddress">...</div>
                            <p className="coin">Ethereum</p>
                        </div>
                        <div className="txForm blue-glassmorphism">
                            <form action="">
                                <input type="text" placeholder="Address to" className="blue-glassmorphism"/>
                                <input type="number" step={.0001} placeholder="Amount(ETH)" className="blue-glassmorphism"/>
                                <input type="text" placeholder="message" className="blue-glassmorphism"/>
                                <div className="hr"></div>
                                <button className="blue-glassmorphism">Send Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;