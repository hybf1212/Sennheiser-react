import React from 'react'

const BestSelling = (props) => {
    return(
        <div id='best-selling'>
            <div className="container-sm">
                <div className='mb-5 mx-3'>
                    <h2 className='nondrag'>베스트셀러</h2>
                </div>
                <div className='best-products d-flex flex-wrap'>

                    {
                        props.info.bestsellingdb.map((v,i)=>{
                            return(
                                <div key={`b-p-${i}`} className="col-xl-4 col-12 my-3">     
                                    <div className='b-p-items mx-3'>
                                        <div className='b-p-img position-relative'>
                                            <a className='d-block position-absolute d-flex' href={v.link}>
                                                <img src={`${process.env.PUBLIC_URL}${v.src}`} alt={v.alt} />
                                            </a>
                                            <a className='b-p-more position-absolute' href={v.link}><p className='position-absolute'>더 알아보기</p></a>
                                        </div>
                                        <div className='mt-4'>
                                            <div>
                                                <a href="">{v.name}</a>
                                            </div>
                                            <div className='item-price mt-3'>
                                                <span className='base-price'>{v.price}</span>
                                            </div>  
                                        </div>
                                    </div>                 
                                </div>     
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default BestSelling; 