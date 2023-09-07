import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const Slide = () => {
    return(
        <Swiper id='main-swiper'
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className='position-relative'>
                <img src={`${process.env.PUBLIC_URL}/img/slideimg/Hero_Desktop_M4_Wireless_KV.jpg`} alt=""/>
                <div className='slide-text position-absolute'>
                    <div className='slide-text-h2'><h2 className='nondrag'>MOMENTUM 4 Wireless</h2></div>
                    <div className='slide-text-p'><p className='nondrag'>어디에서도 느껴보지 못한 감각</p></div>
                    <div className='slide-button'><a href="">READ MORE</a></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='position-relative'>
                <img src={`${process.env.PUBLIC_URL}/img/slideimg/Ambeo_SB_Plus_Set2_Cheetah_RGB_150dpi_smaller.jpg`} alt=""/>
                <div className='slide-text position-absolute'>
                    <div className='slide-text-h2'><h2 className='nondrag'>AMBEO Soundbar Plus</h2></div>
                    <div className='slide-text-p'><p className='nondrag'>Virtual 7.1.4. 새로운 세상이 펼쳐진다</p></div>
                    <div className='slide-button'><a href="">READ MORE</a></div>
                </div>
            </SwiperSlide>   
            <SwiperSlide className='position-relative'>
                <img src={`${process.env.PUBLIC_URL}/img/slideimg/x1_desktop_Sennheiser-Korea-Webshop-Homepage-Banner-Image.jpg`} alt=""/>
                <div className='slide-text position-absolute'>
                    <div className='slide-text-h2'><h2 className='nondrag'>True Wireless Series</h2></div>
                    <div className='slide-text-p'><p className='nondrag'>당신의 하루를 자유롭게</p></div>
                    <div className='slide-button'><a href="">READ MORE</a></div>
                </div>
                </SwiperSlide>
            <SwiperSlide className='position-relative'>
                <img src={`${process.env.PUBLIC_URL}/img/slideimg/220614_SENNHEISER_Indoorlifestyle_1863_1.jpg`} alt=""/>
                <div className='slide-text position-absolute'>
                    <div className='slide-text-h2'><h2 className='nondrag'>PROMOTION</h2></div>
                    <div className='slide-text-p'><p className='nondrag'>공식몰에서 최대 30% 할인된 제품을 만나보세요</p></div>
                    <div className='slide-button'><a href="">READ MORE</a></div>
                </div>
            </SwiperSlide>            
        </Swiper>
    )
}

export default Slide;