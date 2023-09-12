import React from 'react'

const Banners = (props) => {
    return(
        <div id='banners'>             


            {
                props.info.bannersdb.map((v,i)=>{
                    return(
                        <div key={i} className='banner-img position-relative'>
                            <div className='banner-bg-img' style={{backgroundImage: `url(${process.env.PUBLIC_URL}${v.bgsrc})`}}>
                                <div className='banner-text position-absolute'>
                                    <div><h2 className='nondrag'>{v.title}</h2></div>
                                    <div><span className='nondrag'>{v.text}</span></div>
                                    <div className='banner-button'><a href={v.link}>{v.btntext}</a></div>
                                </div>
                            </div>                            
                        </div>
                    )
                })
            }


        
        </div>
    )
}

export default Banners;