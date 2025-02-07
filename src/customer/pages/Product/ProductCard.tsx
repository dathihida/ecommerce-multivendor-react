import React from 'react'
import './ProductCard.css'

const images = [
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-front_195a6283-8e9f-4389-9bcc-bcfdf6f09fd8_800x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-back_b32a2362-ae20-46f7-858f-207b1e29dc38_800x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-crop_800x.jpg?v=1695981317"
];

const ProductCard = () => {
  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'>
          {images.map((image) => <img className='card-media object-top-' src={image} alt="" /> )}
        </div>
      </div>
    </>
  )
}

export default ProductCard