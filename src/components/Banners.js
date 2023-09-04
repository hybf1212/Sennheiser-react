import React from 'react'

const Banners = () => {
    return(
        <div id='banners'>
            <div className='banner-img'>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/Ambeo_SB_Plus_Set2_Cheetah_RGB_150dpi_smaller.jpg)`}}></div>
            </div>
            <div className='banner-img'>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/MOMENTUM_4_Wireless_Female_Lifestyle_Image_Outdoor_Black_copy_eaec7c3d-34cd-48c5-8911-fae81c3beb32.jpg)`}}></div>
            </div>
            <div className='banner-img'>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/HE_1_Tubes_Product_shot_Front_black_2.jpg)`}}></div>
            </div>
            <div className='banner-img'>
                <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bannerimg/x1_tablet_Profile_USB_Microphone_Gamer_In_Use_21.jpg)`}}></div>
            </div>
        </div>
    )
}

export default Banners;