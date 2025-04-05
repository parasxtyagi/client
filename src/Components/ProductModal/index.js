import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css"; // ✅ Correct CSS import
import { useRef } from "react";

const ProductModal = (props) => {
    const zoomSliderBig = useRef();

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    };

    return (
        <Dialog
            open={true}
            className="productModal"
            onClose={props.closeProductModal}
            maxWidth="md"
            fullWidth
        >
            <Button className="close_" onClick={props.closeProductModal}>
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
                        <div className="productZoom">
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover"
                                        zoomScale={1.5}
                                        src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                                        alt="Zoom Product"
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec.</p>
                        <h5 className="text-danger">$14.00</h5>
                        <Button variant="contained" color="primary">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductModal;
