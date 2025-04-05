import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const HomeCat = () => {
    const itemBg = [
        `#fffceb`, `#ecffec`, `#feefea`, `#fff3ff`, `#f2fce4`,
        `#fffceb`, `#f2fce4`, `#feefea`, `#fff3ff`, `#f2fce4`,
        `#fffceb`, `#f2fce4`, `#fffceb`, `#feefea`, `#fff3ff`,
        `#fffceb`, `#ecffec`, `#feefea`, `#feefea`, `#fff3ff`,
    ];

    return (
        <section className="homeCat">
            <div className="container">
                <h3 className="mb-3 hd">Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="item text-center cursor" style={{ background: item }}>
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="item" />
                                    <h6>Cake & Milk</h6>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default HomeCat;
