import { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Slide from "@mui/material/Slide";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const context = useContext(MyContext);
    const [filteredCountries, setFilteredCountries] = useState(context.countryList || []);

    useEffect(() => {
        setFilteredCountries(context.countryList);
    }, [context.countryList]);

    const selectCountry = (index, country) => {
        setselectedTab(index);
        setisOpenModal(false);
        context.setSelectedCountry(country); // ✅ CORRECTED here
    };

    const handleFilter = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchQuery(keyword);

        if (keyword === "") {
            setFilteredCountries(context.countryList);
        } else {
            const filteredList = context.countryList.filter((item) =>
                item.country.toLowerCase().includes(keyword)
            );
            setFilteredCountries(filteredList);
        }
    };

    return (
        <>
            <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">
                        {context.selectedCountry !== "" ? context.selectedCountry.length > 10
                            ? context.selectedCountry?.substr(0, 10) + "..."
                            : context.selectedCountry : "Select Location"}
                    </span>
                </div>
                <span className="ml-auto">
                    <FaAngleDown />
                </span>
            </Button>

            <Dialog
                open={isOpenModal}
                onClose={() => setisOpenModal(false)}
                className="locationModal"
                TransitionComponent={Transition}
            >
                <h4 className="mb-0">Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setisOpenModal(false)}>
                    <MdClose />
                </Button>

                <div className="headersearch w-100">
                    <input
                        type="text"
                        placeholder="Search your area..."
                        value={searchQuery}
                        onChange={handleFilter}
                    />
                    <Button>
                        <IoIosSearch />
                    </Button>
                </div>

                <ul className="countryList mt-3">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((item, index) => (
                            <li key={index}>
                                <Button
                                    onClick={() => selectCountry(index, item.country)}
                                    className={selectedTab === index ? "active" : ""}
                                >
                                    {item.country}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
