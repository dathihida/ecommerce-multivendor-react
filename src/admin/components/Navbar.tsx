import { Avatar, Box, Button, IconButton, useMediaQuery } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const themeIs = useTheme();
  const isLarge = useMediaQuery(themeIs.breakpoints.up("lg"));
  return (
    <>
        <Box>
          <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b'>
            <div className='flex items-center gap-9'>
              <div className='flex items-center gap-2'>
                {!isLarge && <IconButton>
                  <MenuIcon />
                </IconButton>}
                <h1 className='logo cursor-pointer text-lg md:text-2xl text-primary-colors'>
                  DatShop
                </h1>
              </div>
              <ul className='flex items-center font-medium text-gray-700 gap-4 lg:gap-8'>
                {["Men", "Women", "Kids", "Home & Furniture", "Electronics"]
                  .map((item) => 
                  <li className='mainCategory hover:text-primary-colors hover:border-b-2 h-[70px]
                  px-4 border-primary-colors flex items-center'>
                    {item}
                  </li> 
                )}
              </ul>
            </div>
              

              <div className='flex items-center gap-1 lg:gap-6'>
                <IconButton>
                  <SearchIcon />
                </IconButton> 
                {true ? 
                  <Button className='flex items-center gap-2'>
                    <Avatar sx={{ width: 29, height: 29 }}
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <h1 className='font-semibold hidden lg:block'>
                      Dat
                    </h1>
                  </Button> : <Button variant='contained'>Login</Button>} 

                  <IconButton>
                    <FavoriteBorder sx={{fontSize:29}}/>
                  </IconButton>   
                  <IconButton>
                    <AddShoppingCart className='text-gray-700' sx={{fontSize:29}}/>
                  </IconButton>  

                  {isLarge && 
                    <Button startIcon={<Storefront/>} variant='outlined'>
                    Become Seller
                  </Button>}
              </div>
            
          </div>
        </Box>
    </>
  )
}

export default Navbar