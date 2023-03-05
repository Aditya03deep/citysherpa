
import "./Login.css"
import log_bg1 from "../../pics/log_bg1.jpg"
import { TextField } from "@mui/material"
const Login = () => {
    return (
        <main className="login-top">
            <img className="login-frame-inner" alt="" src={log_bg1} />
            <div className="login-frame-item">
                <div className="login-rectangle-1">
                    <span className="hello-text1">NEW HERE ?</span>
                    <span className="hello-text2">Register and dive into the adventure</span>
                </div>
                <div className="login-rectangle-2">
                    <div className="login-reg-btn">
                        <button className="login-reg-btn-1">REGISTER</button>
                    </div>
                </div>
            </div>
            <div className="login-frame-child">
                <div className="all-span">
                    <span className="hello-text1">Hi there,</span>
                    <span className="hello-text2">Its good to have you back here</span>
                    <span className="g-icon">G</span>
                    <span className="hello-text3">OR</span>
                </div>
                <div className="login-rectangle-parent">


                    <div className="login-text_parent">
                        <TextField
                            className="login-text_field"
                            sx={{ width: 500,m:2 }}
                            color="primary"
                            variant="standard"
                            type="text"
                            label="Email"

                            size="medium"
                            margin="none"
                        
                        />

                        <TextField
                            className="login-text_field"
                            sx={{ width: 500,m:2 }}
                            color="primary"
                            variant="standard"
                            type="text"
                            label="Password"

                            size="medium"
                            
                        />

                    </div>



                </div>
                <div className="login-btn">
                    <button className="login-btn-1">LOGIN</button>
                </div>
            </div>

        </main>
    );
};

export default Login;
