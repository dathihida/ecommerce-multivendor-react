import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid, Grid2, IconButton, Rating } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between border my-2 p-2'>
      <Grid2 container spacing={9}>
        <Grid2 size={{xs:1}}>
          <Box>
            <Avatar className='text-white sx={{with:56, height:56, bgcolor: "#9155FD"}}'>
              z
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{xs:9}}>
            <div className='space-y-2'>
              <div>
                <p className='font-semibold text-lg'>Dat</p>
                <p className='opacity-70'>2024-01-01 13:13:12</p>
              </div>
            </div>
            <Rating 
              value={4} readOnly precision={1}/>
            <p>value for money product, great product</p>
            <div>
              <img className='w-24 h-24 object-cover'
                src="https://assets.vogue.com/photos/5f341f6f4721c86585cbb800/master/w_1920,c_limit/fullsizeoutput_6bcd_1_1080x.jpg" alt="" />
            </div>
        </Grid2>
        
      </Grid2>
      <IconButton sx={{height:40, width:40}}>
        <Delete sx={{color:red[700]}}/>
      </IconButton>
    </div>
  )
}

export default ReviewCard