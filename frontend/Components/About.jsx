import { BiSearchAlt } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
const About = () => {
    return (
        <>
            <div id="about" className="gradient-bg-services">
                <div className="container">
                    <div className="left">
                        <h1 className="text-gradient">Services that we continue to improve</h1>
                        <p>The best choice for buying and selling your crypto assets, with the various super friendly services we offer</p>
                    </div>
                    <div className="right">
                        <div className="services white-glassmorphism">
                        <div className="icon icon1"><FaHeartbeat/></div>
                                <div className="content">
                                    <h1>Fastest transactions</h1>
                                    <p>Security is guranteed. We always maintain privacy and maintain the quality of our products</p>
                                </div>
                        </div>
                        <div className="services white-glassmorphism">
                                <div className="icon icon2"><MdSecurity/></div>
                                <div className="content">
                                    <h1>Security gurantee</h1>
                                    <p>Security is guranteed. We always maintain privacy and maintain the quality of our products</p>
                                </div>
                        </div>
                            <div className="services white-glassmorphism">
                                <div className="icon icon3"><BiSearchAlt/></div>
                                <div className="content">
                                    <h1>Best exchange rates</h1>
                                    <p>Security is guranteed. We always maintain privacy and maintain the quality of our products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;