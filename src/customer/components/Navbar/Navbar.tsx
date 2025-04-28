import { Avatar, Badge, Box, Button, IconButton, Modal, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../../data/category/mainCategory';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useDispatch } from 'react-redux';
import { getWishlistByUserId } from '../../../State/customer/wishlistSlice';
import { fetchUserCart } from '../../../State/customer/cartSlice';
import SearchBar from './SearchBar';

  const Navbar = () => {
  const themeIs = useTheme();
  const isLarge = useMediaQuery(themeIs.breakpoints.up("lg"));
  const [selectCategory, setSelectCategory] = useState('men');
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Từ khóa tìm kiếm:', keyword);
      navigate(`/products?query=${keyword}`)
      handleClose();
    }
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWishlistByUserId());
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
  }, [dispatch]);

  const {auth, cart, wishlist} = useAppSelector(store=>store)
  console.log("Auth state in Navbar:", auth.jwt);
  console.log("Auth state in Navbar:", localStorage.getItem("jwt"));
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
                <IconButton onClick={handleOpen} className='lg:hidden'>
                  <SearchIcon />
                </IconButton>

                <Modal open={open} onClose={handleClose}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      bgcolor: 'background.paper',
                      borderRadius: 2,
                      boxShadow: 24,
                      p: 4,
                      minWidth: 300,
                    }}
                  >
                    <SearchBar
                      value={keyword}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                    />
                  </Box>
                </Modal>

                {
                  auth.user ? 
                  <Button onClick={() =>navigate("/account/orders")} className='flex items-center gap-2'>
                    <Avatar sx={{ width: 29, height: 29 }}
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <h1 className='font-semibold hidden lg:block'>
                      {auth.user?.fullName}
                    </h1>
                  </Button> : 
                  
                  <Button onClick={() => navigate("/login")} 
                    variant='contained'>Login</Button>
                } 

                  <Badge badgeContent={wishlist.wishlist?.products.length || 0} color="primary">
                    <IconButton onClick={()=>navigate("/wishlist")}>
                      <FavoriteBorder sx={{fontSize:29}}/>
                    </IconButton>   
                  </Badge>
                  
                  <Badge badgeContent={cart.cart?.cartItems.length || 0} color="primary">
                    <IconButton onClick={()=>navigate("/cart")}>
                      <AddShoppingCart sx={{fontSize:29}}/>
                    </IconButton> 
                  </Badge>  

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