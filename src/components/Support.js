import React from 'react'

const Support = () => {
    return(
        <div id="support">
            <div className='support-banner' style={{backgroundImage : `URL(${process.env.PUBLIC_URL}/img/bannerimg/MOMENTUM_4_Wireless_Female_Lifestyle_Image_Outdoor_Black_copy_eaec7c3d-34cd-48c5-8911-fae81c3beb32.jpg)`}}>
                <div className='support-text-block'>
                    <img className='mb-2' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_w.svg`} alt="젠하이저" />
                    <h2 className='nondrag'>정품인증 이용안내</h2>
                    <div className='small-stb nondrag'>                        
                        <p>젠하이저에서 판매하는 제품을 정품으로 등록하시고<br></br>2년 무상보증 및 각종행사, 할인쿠폰 등의 다양한 혜택을 만나보세요.</p>
                    </div>                    
                </div>
                <div className='support-input'>
                        
                </div>
            </div>
            
        </div>
    )
}


export default Support