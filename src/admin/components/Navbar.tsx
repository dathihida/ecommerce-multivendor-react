import { Box, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <>
        <Box>
          <div>
            <div>
              <div className='flex items-center gap-2'>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <h1 className='logo cursor-pointer text-lg md:text-2xl text-[#00927]'>
                  DatShop
                </h1>
              </div>
              <div>
                <IconButton>
                  <SearchIcon />
                </IconButton>              
              </div>
            </div>
          </div>
        </Box>
    </>
  )
}

export default Navbar