import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';



const Slide = (props) => {
  
    return(
        <Swiper id='main-swiper'
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={500}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={(index) => {
                 document.body.classList = 'active'+index.realIndex;
               
            }}
            onSwiper={(swiper) => console.log(swiper)}
        >

            {
                props.info.swiperdb.map((v, i)=>{
                    return (
                        <SwiperSlide className={' swiperslide'+i } style={{background : `url(${v.src}) no-repeat center`,backgroundSize : "cover"}}>
                            <div className={`container py-5 mt-5 h-100 d-flex flex-wrap flex-column ${v.style}`}>
                                <div className={`slide-text  ${v.textstyle}`}>
                                    <div className='slide-text-h2'><h2 className='nondrag'>{v.h2}</h2></div>
                                    <div className='slide-text-p'><p className='nondrag'>{v.p}</p></div>
                                    <div className='slide-button'><a href="">READ MORE</a></div>
                                </div>
                            </div>                                
                        </SwiperSlide>
                    )
                })                        
            }           
        </Swiper>
    )
}

export default Slide;