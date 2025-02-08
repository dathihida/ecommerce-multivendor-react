import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';

const images = [
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-creative_1742741f-3680-48ce-8d93-63d58adb7c2b_2000x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-front_195a6283-8e9f-4389-9bcc-bcfdf6f09fd8_800x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-back_b32a2362-ae20-46f7-858f-207b1e29dc38_800x.jpg?v=1695981317",
  "https://www.derek-rose.com/cdn/shop/files/mens-t-shirt-jordan-linen-white-crop_800x.jpg?v=1695981317"
];

const ProductCard = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000);
    } else if(interval){
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered])

  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((item, index) => <img className='card-media object-top' src={item} alt=""
            style={{transform:`translateX(${(index - currentImage)*100}%)`}}/> 
          )}

         {isHovered &&
            <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-3'>
                <Button variant='contained' color='secondary'>
                  <Favorite sx={{color:teal[500]}}/>
                </Button>

                <Button variant='contained' color='secondary'>
                  <ModeComment sx={{color:teal[500]}}/>
                </Button>
              </div>
            </div>
          }

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
    </>
  )
}

export default ProductCard