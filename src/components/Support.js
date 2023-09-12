import React from 'react'

const Support = () => {
    return(
        <div id="support">
            <div className='support-banner' style={{backgroundImage : `URL(${process.env.PUBLIC_URL}/img/bannerimg/MOMENTUM_4_Wireless_Female_Lifestyle_Image_Outdoor_Black_copy_eaec7c3d-34cd-48c5-8911-fae81c3beb32.jpg)`}}>
                <div className='support-text-block container'>
                    <img className='mb-2' src={`${process.env.PUBLIC_URL}/img/Sennheiser_logo_w.svg`} alt="젠하이저" />
                    <h2 className='nondrag'>정품인증 이용안내</h2>
                    <div className='small-stb nondrag d-lg-flex'>                        
                        <p>젠하이저에서 판매하는 제품을 정품으로 등록하시고<br></br>2년 무상보증 및 각종행사, 할인쿠폰 등의 다양한 혜택을 만나보세요.</p>
                        <a href="#"></a>
                    </div>                    
                </div>
                <div className='support-input d-flex flex-column justify-content-center'>
                    <div className='container-md'>
                        <form action="#" className='d-flex justify-content-between align-items-center'>
                            <label htmlFor='item-name'>제품명</label><input id='item-name' type="text" className='flex-grow-1' placeholder='제품명을 입력해주세요.'/>
                            <button className='support-search-button ms-4 flex-nowrap' type='button'>검색</button>
                        </form>       
                        <form action="#" className='d-flex justify-content-between align-items-center mt-5'>
                            <label htmlFor='serial-number'>제조번호(S/N)</label><input id='serial-number' type="text" className='flex-grow-1' placeholder='제조번호를 입력해주세요.'/>
                        </form>      
                        <div className='text-end mt-5'>
                            <button type='button'>등록하기</button>
                        </div>                                             
                    </div>            
                </div>
            </div>
            
        </div>
    )
}


export default Support