import React from 'react'

const Benefits = () => {
    return(
        <div id="benefits">
            <div className="container-md">
                <div className='mx-3 mb-5'>
                    <h2 className='nondrag'>젠하이저 공식 스토어 구매 혜택</h2>
                </div>
                <div className='benefits-text d-flex flex-wrap'>
                    <div className="col-xl-4 col-6 mt-4">
                        <span className='senn-mini-logo mx-3 d-flex d-flex nondrag'>믿을 수 있는 젠하이저 정품</span>
                    </div>
                    <div className="col-xl-4 col-6 mt-4">
                        <span className='guarantee mx-3 d-flex d-flex nondrag'>구매일로부터 2년 무상 보증</span>
                    </div>
                    <div className="col-xl-4 col-6 mt-4">
                        <span className='parcel mx-3 d-flex nondrag'>무료 배송</span>
                    </div>                    
                </div>
            </div>
        </div>
    )
}


export default Benefits