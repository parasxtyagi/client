import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useContext, useRef, useState } from "react";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductModal = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };

    const images = [
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
    ];

    const thumbnails = [
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
        "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
    ];

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
                        <div className="productZoom position-relative">
                            <div className="badge badge-primary">23%</div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >
                                {images.map((imgUrl, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="item">
                                            <InnerImageZoom
                                                zoomType="hover"
                                                zoomScale={1}
                                                src={imgUrl}
                                                alt={`Zoom Product ${index + 1}`}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            navigation={true}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}
                        >
                            {thumbnails.map((thumbUrl, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`item ${slideIndex === index ? 'item_active' : ''}`}>
                                        <img
                                            src={thumbUrl}
                                            className="w-100"
                                            onClick={() => goto(index)}
                                            alt={`Product Thumbnail ${index + 1}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
