
import "./Landing.css";
import lan_bg1 from "../../pics/lan_bg1.jpg"
import { NavLink } from "react-router-dom";

const Landing = () => {
    return (
        <div className="lan-rectangle-container">
            <img className="lan-rectangle-icon" alt="" src={lan_bg1} />

            <div className="lan-rectangle-wrapper">
                <nav className="lan-rectangle-nav">
                    <div className="nav_container">

                    
                        <ul className="nav_ul">
                            {/* <li className="nav_but">
                                <NavLink to="/" style={{ textDecoration: 'none' }}><span>Home</span></NavLink>
                            </li> */}
                            <li className="nav_but">
                                <NavLink to="/recommend" style={{ textDecoration: 'none' }}><span>Recommendation</span></NavLink>
                            </li>
                            <li className="nav_but">
                                <NavLink to="/budget" style={{ textDecoration: 'none' }}><span>Budget Calculator</span></NavLink>
                            </li>
                            <li className="nav_but">
                                <NavLink to="/login" style={{ textDecoration: 'none' }}><span>Login</span></NavLink>
                            </li>
                            <li className="nav_but">
                                <NavLink to="/register" style={{ textDecoration: 'none' }}><span>Register</span></NavLink>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>


            <div className="lan-rectangle-root">
                <main className="lan-frame-item">
                    <div className="main_but"><h1>CITY <span>SHERPA</span></h1>
                    <NavLink to="/map" style={{ textDecoration: 'none' }}><div className="get"><span>Get Started</span></div></NavLink>
                    </div>
                    
                </main>
            </div>

            <div className="lan-rectangle-top">
                <footer className="lan-frame-inner" />
            </div>



        </div>
    );
};

export default Landing;
