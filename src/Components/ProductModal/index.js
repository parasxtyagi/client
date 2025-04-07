import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useRef } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";





const ProductModal = (props) => {
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }


    return (
        <>
            <Dialog
                open={true}
                className="productModal"
                onClose={() => props.closeProductModal()}
                maxWidth="md"
                fullWidth
            >
                <Button className="close_" onClick={() => props.closeProductModal()}>
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
                                            zoomScale={1}
                                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                                            alt="Zoom Product"
                                        />
                                    </div>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                                            alt="Zoom Product"
                                        />
                                    </div>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                                            alt="Zoom Product"
                                        />
                                    </div>

                                </Slider>
                            </div>

                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>

                                <div className="item" >
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(0)}

                                    />
                                </div>
                                <div className="item" >
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`}
                                        className="w-100" onClick={() => goto(1)}

                                    />
                                </div>
                                <div className="item" >
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`}
                                        className="w-100" onClick={() => goto(2)}

                                    />
                                </div>

                            </Slider>




                        </div>
                        <div className="col-md-7">
                            <div className="d-flex info align-items-center mb-3">
                                <span className="oldPrice lg mr-2">$9.35</span>
                                <span className="netPrice text-danger lg">$7.15</span>
                            </div>

                            <span className="badge bg-success">IN STOCK</span>

                            <p className="mt-3">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                            <div className="d-flex align-items-center">
                                <QuantityBox/>
                                <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add To Cart</Button>
                            </div>

                            <div className="d-flex align-items-center mt-4 actions">
                            <Button className="btn-round btn-sml" variant="outlined"><IoIosHeartEmpty/> &nbsp; Add To Wishlist</Button>
                            <Button className="btn-round btn-sml" variant="outlined"><IoIosHeartEmpty/> &nbsp; COMPARE</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ProductModal;
