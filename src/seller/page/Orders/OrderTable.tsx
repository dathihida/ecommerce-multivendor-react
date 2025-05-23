import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchSellerOrders, updateOrderStatus } from '../../../State/seller/sellerOrderSlice';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { Button, Menu, MenuItem } from '@mui/material';
import { CANCELLED } from 'dns';
import { OrderStatus } from '../../../types/orderTypes';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const orderStatus = [
  {color: '#FFA500', label: 'PENDING'},
  {color: '#F5BCBA', label: 'CONFIRMED'},
  {color: '#F5BCBA', label: 'PLACE'},
  {color: '#1E90FF', label: 'SHIPPED'},
  {color: '#32CD32', label: 'DELIVERED'},
  {color: '#FF0000', label: 'CANCELLED'}
]

const orderStatusColor ={
  PENDING:{color: '#FFA500', label: 'PENDING'},
  CONFIRMED:{color: '#F5BCBA', label: 'CONFIRMED'},
  PLACE:{color: '#F5BCBA', label: 'PLACE'},
  SHIPPED:{color: '#1E90FF', label: 'SHIPPED'},
  DELIVERED:{color: '#32CD32', label: 'DELIVERED'},
  CANCELLED:{color: '#FF0000', label: 'CANCELLED'}
}

export default function OrderTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | any>({});
  const open = Boolean(anchorEl);
  const handleClick = (event: any, orderId:number) => {
    setAnchorEl((prev: any)=> ({...prev, [orderId]: event.currentTarget}));
  };
  const handleClose = (orderId:number)=>() => {
    setAnchorEl((prev: any)=> ({...prev, [orderId]: null}));
  };
  const dispatch = useAppDispatch()
  const {sellerOrders} = useAppSelector(store => store)
  React.useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt") ||  ""))
  }, [])

  const handleUpdateOrderStatus = (orderId:number, orderStatus:any) =>() => {
    dispatch(updateOrderStatus({jwt: localStorage.getItem("jwt") || "", orderId, orderStatus}))
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order ID</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell>Shipping Address</StyledTableCell>
            <StyledTableCell>Order Status</StyledTableCell>
            <StyledTableCell>Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerOrders.orders.map((item) => (
           
            <StyledTableRow key={item.id}>
              <StyledTableCell align="right">{item.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <div className='flex gap-1 flex-wrap'>
                  {
                    item.orderItems.map((orderItem) => (
                      <div className='flex gap-1'>
                        <img src={orderItem.product.images[0]} alt="" className='w-20 rounded-md'/>
                        <div className='flex flex-col justify-between py-2'>
                          <h1>Title: {orderItem.product.title}</h1>
                          <h1>Selling Price: {orderItem.product.sellingPrice}</h1>
                          <h1>Color: {orderItem.product.color}</h1>
                          <h1>Size: {orderItem.product.sizes}</h1>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <div className='flex flex-col gap-1'>
                  <h1>Name: {item.shippingAddress.name}</h1>
                  <h1>Address: {item.shippingAddress.address}, {item.shippingAddress.city}</h1>
                  <h1>Pincode: {item.shippingAddress.pinCode}</h1>
                  <h1>Mobile: {item.shippingAddress.mobile}</h1>
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <span className='px-5 py-2 border rounded-full border-primary-colors text-primary-colors'>
                  {item.orderStatus}
                </span>
              </StyledTableCell>
              <StyledTableCell>
                <Button size='small' color='primary' onClick={(e)=>handleClick(e, item.id)}>
                    Status
                </Button>
                <Menu
                  id={`status-menu ${item.id}`} 
                  anchorEl={anchorEl[item.id]}
                  open={Boolean(anchorEl[item.id])}
                  onClose={handleClose(item.id)}
                  MenuListProps={{
                    'aria-labelledby': `status-menu ${item.id}`,
                  }}
                >
                  {orderStatus.map((status) => 
                    <MenuItem 
                      key={status.label} 
                      onClick={handleUpdateOrderStatus(item.id, status.label)}>
                        {status.label}
                      </MenuItem>
                  )}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
