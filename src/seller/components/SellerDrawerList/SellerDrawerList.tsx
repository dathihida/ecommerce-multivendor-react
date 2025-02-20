import { AccountBalanceWallet, AccountBox, Add, Dashboard, Logout, Receipt } from '@mui/icons-material'
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddIcon from '@mui/icons-material/Add';
import ReceiptIcon from '@mui/icons-material/Receipt'
import DrawerList from '../../../components/DrawerList';

const menu =[
    {
        name: "Dashboard",
        path: "/seller",
        icon: <Dashboard className='text-primary-colors'/>,
        activeIcon: <Dashboard className='text-three-colors'/>
    },
    {
        name: "Orders",
        path: "/seller/orders",
        icon: <ShoppingBagIcon className='text-primary-colors'/>,
        activeIcon: <ShoppingBagIcon className='text-three-colors'/>
    },
    {
        name: "Products",
        path: "/seller/products",
        icon: <InventoryIcon className='text-primary-colors'/>,
        activeIcon: <ShoppingBagIcon className='text-three-colors'/>
    },
    {
        name: "Add Product",
        path: "/seller/add-product",
        icon: <AddIcon className='text-primary-colors'/>,
        activeIcon: <AddIcon className='text-three-colors'/>
    },
    {
        name: "Payment",
        path: "/seller/payment",
        icon: <AccountBalanceWallet className='text-primary-colors'/>,
        activeIcon: <AccountBalanceWallet className='text-three-colors'/>
    },
    {
        name: "Transaction",
        path: "/seller/transaction",
        icon: <ReceiptIcon className='text-primary-colors'/>,
        activeIcon: <ReceiptIcon className='text-three-colors'/>
    }
]
const menu2 = [
    {
        name: "Account",
        path: "/seller/account",
        icon: <AccountBox className='text-primary-colors'/>,
        activeIcon: <AccountBox className='text-white'/>
    },{
        name: "Logout",
        path: "/",
        icon: <Logout className='text-primary-colors'/>,
        activeIcon: <Logout className='text-white'/>
    }
]
const SellerDrawerList = ({toggleDrawer}:{toggleDrawer: any}) => {
  return (
    <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/>
  )
}

export default SellerDrawerList