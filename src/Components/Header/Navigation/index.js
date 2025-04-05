import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link properly
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
    const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

    return (
        <nav>
            <div className="container">
                <div className="row">
                    {/* Sidebar Navigation */}
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                            <Button
                                className="allCatTab align-items-center"
                                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                            >
                                <span className="icon1 mr-2">
                                    <IoIosMenu />
                                </span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className="icon2 ml-2">
                                    <FaAngleDown />
                                </span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>


                                <ul>
                                    <li><Link to="/men"><Button>Men <FaAngleRight className="ml-auto"/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/clothing"><Button>Clothing</Button></Link>
                                            <Link to="/footwear"><Button>Footwear</Button></Link>
                                            <Link to="/watches"><Button>Watches</Button></Link>
                                        </div></li>
                                    <li><Link to="/women"><Button>Women <FaAngleRight className="ml-auto"/></Button></Link>
                                    <div className="submenu">
                                            <Link to="/clothing"><Button>Clothing</Button></Link>
                                            <Link to="/footwear"><Button>Footwear</Button></Link>
                                            <Link to="/watches"><Button>Watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/beauty"><Button>Beauty</Button></Link>
                                    
                                    </li>
                                    <li><Link to="/watches"><Button>Watches</Button></Link>
                                    
                                    </li>
                                    <li><Link to="/kids"><Button>Kids</Button></Link>
                                    
                                    </li>
                                    <li><Link to="/gifts"><Button>Gifts</Button></Link>
                                    
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>

                    {/* Main Navigation */}
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item">
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className="list-inline-item dropdown">
                                <Link to="/men"><Button>Men</Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/women"><Button>Women</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/beauty"><Button>Beauty</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/watches"><Button>Watches</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/kids"><Button>Kids</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/gift"><Button>Gift</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/blog"><Button>Blog</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/contact"><Button>Contact</Button></Link><div className="submenu shadow">
                                    <Link to="/clothing"><Button>Clothing</Button></Link>
                                    <Link to="/footwear"><Button>Footwear</Button></Link>
                                    <Link to="/watches"><Button>Watches</Button></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
