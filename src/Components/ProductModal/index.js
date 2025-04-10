import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";


import { useContext} from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";




const ProductModal = (props) => {
   
    const context = useContext(MyContext);

   

 

    return (
        <Dialog
            open={true}
            className="productModal"
            onClose={() => context.setisOpenProductModal(false)}
            maxWidth="md"
            fullWidth
        >
            <Button className="close_" onClick={() => context.setisOpenProductModal(false)}>
                <MdClose />
            </Button>

            <div className="p-3">
                <h4 className="mb-1 font-weight-bold">
                    All Natural Italian-Style Chicken Meatballs
                </h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className="ml-2 font-weight-bold">Welch's</span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                </div>

                <hr />

                <div className="row mt-2 productDetailsModal">
                    <div className="col-md-5">
                     <ProductZoom/>
                    </div>

                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mb-3">
                            <span className="oldPrice lg mr-2">$9.35</span>
                            <span className="netPrice text-danger lg">$7.15</span>
                        </div>

                        <span className="badge bg-success">IN STOCK</span>

                        <p className="mt-3">
                            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
                            Class aptent taciti sociosqu ad litora torquent
                        </p>

                        <div className="d-flex align-items-center">
                            <QuantityBox />
                            <Button className="btn-blue btn-lg btn-big btn-round ml-5">Add To Cart</Button>
                        </div>

                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant="outlined">
                                <IoIosHeartEmpty /> &nbsp; Add To Wishlist
                            </Button>
                            <Button className="btn-round btn-sml ml-3" variant="outlined">
                                <MdOutlineCompareArrows /> &nbsp; COMPARE
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModal;
