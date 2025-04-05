import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from '@mui/material/Button';
import CountryDrop from "../CountryDropdown";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {
    const context = useContext(MyContext);

    return (
        <>
            <div className="headerWrapper">

                {/* Top Strip */}
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID-19</b> epidemic, orders may be processed with a slight delay.
                        </p>
                    </div>
                </div>

                {/* Header */}
                <header className="header">
                    <div className="container">
                        <div className="row align-items-center">

                            {/* Logo */}
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>

                            {/* Middle Section */}
                            <div className="col-sm-10 d-flex align-items-center part2">

                                {/* Safe check with optional chaining */}
                                {Array.isArray(context?.countryList) && context.countryList.length > 0 && (
                                    <CountryDrop />
                                )}

                                <SearchBox />

                                {/* User & Cart */}
                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className="circle mr-3">
                                        <FiUser />
                                    </Button>

                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className="price">$3.29</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle">
                                                <IoBagOutline />
                                            </Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Navigation Menu */}
                <Navigation />
            </div>
        </>
    );
};

export default Header;
