import React from 'react'

const Banners = () => {
    return(
        <div id='banners'>
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/Ambeo_SB_Plus_Set2_Cheetah_RGB_150dpi_smaller.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2>AMBEO Soundbar <br></br>Plus</h2></div>
                    <div><span>Virtual 7.1.4. 경험해보지 못했던 소리의 세계를 느껴보세요.</span></div>
                    <div className='banner-button'><a href="">자세히보기</a></div>
                </div>
            </div>
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/MOMENTUM_4_Wireless_Female_Lifestyle_Image_Outdoor_Black_copy_eaec7c3d-34cd-48c5-8911-fae81c3beb32.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2>MOMENTUM Series</h2></div>
                    <div><span>비교할 수 없는 젠하이저 사운드</span></div>
                    <div className='banner-button'><a href="">제품구매하기</a></div>
                </div>
            </div>
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/HE_1_Tubes_Product_shot_Front_black_2.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2>Audiophile</h2></div>
                    <div><span>오디오필의 세계로 당신을 초대합니다.</span></div>
                    <div className='banner-button'><a href="">자세히보기</a></div>
                </div>
            </div>
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/x1_tablet_Profile_USB_Microphone_Gamer_In_Use_21.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2>Profile USB <br></br>Microphone</h2></div>
                    <div><span>여러분의 이야기를 말해주세요. 전세계와 공유하세요.</span></div>
                    <div className='banner-button'><a href="">자세히보기</a></div>
                </div>
            </div>
        </div>
    )
}

export default Banners;