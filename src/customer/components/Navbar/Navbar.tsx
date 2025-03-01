import { Avatar, Box, Button, IconButton, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const themeIs = useTheme();
  const isLarge = useMediaQuery(themeIs.breakpoints.up("lg"));
  const [selectCategory, setSelectCategory] = useState('men');
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();
  return (
    <>
        <Box className='sticky top-0 left-0 right-0 bg-white' sx={{zIndex: 2}}>
          <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
            <div className='flex items-center gap-9'>
              <div className='flex items-center gap-2'>
                {!isLarge && <IconButton>
                  <MenuIcon />
                </IconButton>}
                <h1 onClick={()=>navigate("/")} className='logo cursor-pointer text-lg md:text-2xl text-primary-colors'>
                  DatShop
                </h1>
              </div>
              <ul className='flex items-center font-medium text-gray-700 gap-4 lg:gap-8'>
                {mainCategory.map((item) => 
                  <li 
                  onMouseLeave={() => {setShowCategorySheet(false)}}
                  onMouseEnter={() => {setShowCategorySheet(true); setSelectCategory(item.categoryId); }} 
                    className='mainCategory hover:text-primary-colors hover:border-b-2 h-[70px]
                  px-4 border-primary-colors flex items-center'>
                    {item.name}
                  </li> 
                )}
              </ul>
            </div>
              

              <div className='flex items-center gap-1 lg:gap-6'>
                <IconButton>
                  <SearchIcon />
                </IconButton> 
                {false ? 
                  <Button onClick={() =>navigate("/account/orders")} className='flex items-center gap-2'>
                    <Avatar sx={{ width: 29, height: 29 }}
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <h1 className='font-semibold hidden lg:block'>
                      Dat
                    </h1>
                  </Button> : <Button onClick={() => navigate("/login")} variant='contained'>Login</Button>} 

                  <IconButton>
                    <FavoriteBorder sx={{fontSize:29}}/>
                  </IconButton>   
                  <IconButton onClick={()=>navigate("/cart")}>
                    <AddShoppingCart className='text-gray-700' sx={{fontSize:29}}/>
                  </IconButton>  

                  {isLarge && 
                    <Button onClick={()=> navigate("/become-seller")} 
                      startIcon={<Storefront/>} variant='outlined'>
                    Become Seller
                  </Button>}
              </div>
            
          </div>
          {showCategorySheet && <div 
            onMouseLeave={() => {setShowCategorySheet(false)}}
            onMouseEnter={() => setShowCategorySheet(true)} 
            className='categorySheet absolute top-[4.41rem] left-20 right-20 border'>
            <CategorySheet selectCategory={selectCategory}/>
          </div>}
        </Box>
    </>
  )
}

export default Navbar