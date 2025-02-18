import React from 'react'

const SimilarProductCard = () => {
  return (
    <div className='group px-4 relative'>
        <div className='card'>
          <img className='card-media object-top w-auto' 
            src="https://dy9ihb9itgy3g.cloudfront.net/products/11865/y3180/y3180_ivory___2.webp" alt=""/>
        </div>

        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>Mens-T-Shirt-Jordan-Linen</h1>
            <p>Blue Shirt</p>

           </div>

           <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>
              400 VND
            </span>
            <span className='thin-line-through text-gray-400'>
              500 VND
            </span>
            <span className='text-primary-colors font-serif'>
              30% off
            </span>
           </div>
        </div>
      
      </div>
  )
}

export default SimilarProductCard