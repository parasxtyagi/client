import Button from "@mui/material/Button";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QuantityBox = () => {
    const [inputVal, setInputVal] = useState(1);

    const minus = () => {
        if (inputVal > 1) {
            setInputVal(inputVal - 1);
        } else {
            setInputVal(1); // Ensures it never goes below 1
        }
    };

    const plus = () => {
        setInputVal(inputVal + 1);
    };

    return (
        <div className="quantityDrop d-flex align-items-center">
            <Button onClick={minus}><FaMinus /></Button>
            <input
                type="text"
                value={inputVal}
                readOnly
                className="mx-2 text-center"
                style={{ width: "50px" }}
            />
            <Button onClick={plus}><FaPlus /></Button>
        </div>
    );
};

export default QuantityBox;
