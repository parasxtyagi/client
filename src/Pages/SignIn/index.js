import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/logo.ico.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/images/google.png";

const SignIn = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);

    return (
        <section className="section signInPage">
            <div className="shape-bottom">
                <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8">
                    <path
                        className="st0"
                        d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 
              c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
                    ></path>
                </svg>
            </div>

            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            width="100"
                            height="100"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <form className="mb-4">
                        <h2>Sign In</h2>

                        <div className="form-group">
                            <TextField
                                id="email"
                                label="Email"
                                type="email"
                                required
                                variant="standard"
                                className="w-100"
                                fullWidth
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                required
                                variant="standard"
                                className="w-100"
                                fullWidth
                            />
                        </div>

                        <a className="border-effect cursor txt"> Forgot Password?</a>

                        <div className="row mt-3 mb-3 text-center">
                            {/* Sign In Button */}
                            <div className="col-md-6">
                                <Button className="btn-blue btn-lg btn-big w-100">Sign In</Button>
                            </div>



                            {/* Cancel Button */}
                            <div className="col-md-6">
                                <Link to="/">
                                    <Button
                                        className="btn-lg btn-big w-100"
                                        variant="outlined"
                                        onClick={() => context.setisHeaderFooterShow(true)}
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </div>



                        <p className="txt">Not Registered? <Link to="/signUp" className="border-effect">Sign Up</Link></p>

                        <h6 className="mt-4 text-center font-weight-bold">Or continue with social account?</h6>

                        <Button className="loginWithGoogle" variant="outlined"><img src={GoogleImg} />Sign In With Google</Button>


                    </form>


                </div>
            </div>
        </section>
    );
};

export default SignIn;
