import React from 'react'

const Banners = () => {
    return(
        <div id='banners'>                        
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/HE_1_Tubes_Product_shot_Front_black_2.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2 className='nondrag'>Audiophile</h2></div>
                    <div><span className='nondrag'>오디오필의 세계로 당신을 초대합니다.</span></div>
                    <div className='banner-button'><a href="">자세히보기</a></div>
                </div>
            </div>
            <div className='banner-img position-relative'>
                <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/x1_tablet_Profile_USB_Microphone_Gamer_In_Use_21.jpg)`}}></div>
                <div className='banner-text position-absolute'>
                    <div><h2 className='nondrag'>Profile USB Microphone</h2></div>
                    <div><span className='nondrag'>여러분의 이야기를 말해주세요. 전세계와 공유하세요.</span></div>
                    <div className='banner-button'><a href="">자세히보기</a></div>
                </div>
            </div>
        </div>
    )
}

export default Banners;