import React, { useEffect, useState } from 'react'
import './ProductCard.css'
import { Button } from '@mui/material';
import { Add, Favorite, ModeComment } from '@mui/icons-material';
import { teal } from '@mui/material/colors';
import { Product } from '../../../types/ProductTypes';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../State/Store'
import { addItemToCart } from '../../../State/customer/cartSlice'; // Adjust the path if necessary
import { addProductToWishlist } from '../../../State/customer/wishlistSlice';
import { showSnackbar } from '../../../State/SnackBarSlice';

const ProductCard = ({item}:{item:Product}) => {  
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const handleAddToCart = () => {
  //   dispatch(addItemToCart({
  //     jwt:localStorage.getItem("jwt"),
  //     request: { productId: item.id, size: "M", quantity: 1 }
  //   }));
  // };
  const handleAddToCart = () => {
          dispatch(addItemToCart({jwt:localStorage.getItem("jwt"), 
              request:{
                productId: item.id,
                size: item.sizes,
                quantity: 1
              }
          }))

          dispatch(showSnackbar({
            message: "Item added to cart",
            severity: "success",
            open: true
          }))
      }


  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if(interval){
      clearInterval(interval);
      interval = null;
    }
    return () => clearInterval(interval);
  }, [isHovered])

  const handleWishlist = (event: any) => {
    event.stopPropagation () 
    item.id && dispatch(addProductToWishlist({productId: item.id}))
  }
  return (
    <>
    
  
      <div onClick={()=>navigate(`/product-details/${item.category?.categoryId}/${item.title}/${item.id}`)}
       className='group px-4 relative'>
        <div className='card'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.images.map((item, index) => <img className='card-media object-top' src={item} alt=""
            style={{transform:`translateX(${(index - currentImage)*100}%)`}}/> 
          )}

         {isHovered &&
            <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-3'>
                <Button onClick={handleWishlist} variant='contained' color='secondary'>
                  <Favorite sx={{color:teal[500]}}/>
                </Button>

                <Button onClick={handleAddToCart} variant='contained' color='secondary'>
                  <Add sx={{color:teal[500]}}/>
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
            <h1>{item.seller?.bussinessDetails.businessName}</h1>
            <p>{item.title}</p>

           </div>

           <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>
              {item.sellingPrice}
            </span>
            <span className='thin-line-through text-gray-400'>
              {item.mrpPrice}
            </span>
            <span className='text-primary-colors font-serif'>
              {item.discountPercent}%
            </span>
           </div>
        </div>
      
      </div>
     </>
      ) 
}

export default ProductCard