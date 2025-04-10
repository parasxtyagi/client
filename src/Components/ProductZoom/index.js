import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "react-inner-image-zoom/lib/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Navigation } from "swiper/modules";
import { useRef, useState } from 'react';


const ProductZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

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
        <div className="productZoom">
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
    )
}

export default ProductZoom;