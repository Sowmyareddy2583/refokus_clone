import React from 'react'

function Marquee({images_url}) {
  return (
    <div className='flex w-full py-8 gap-20 overflow-hidden'>
      {images_url.map((url,index)=><img key={index} src={url} className='shrink-0 w-[6vw]'/>)}
      {images_url.map((url,index)=><img key={index} src={url} />)}
    </div>
  )
}

export default Marquee