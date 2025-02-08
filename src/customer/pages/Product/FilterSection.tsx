import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { colors } from '../../../data/Filter/color'

const FilterSection = () => {
  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between px-9 h-[40px] lg:border-r'>
        <p className='text-lg font-semibold'>
          Filters
        </p>
        <Button size='small' variant='contained' className='secondary cursor-pointer font-semibold'>
          Clear All
        </Button>
      </div>

      <Divider/>

      <section className='space-y-5 px-9'>
      <FormControl>
        <FormLabel 
          sx=
          {{
            fontSize: "16px",
            fontWeight: "bold",
            color: "teal[500]",
            pb:"14px"
          }} 
          className='text-2xl font-semibold'
          >Color</FormLabel>
        <RadioGroup
          aria-labelledby="color"
          defaultValue=""
          name="color"
        >
          {colors.map((color) => 
            <FormControlLabel value={color.name} control={<Radio />} className='uppercase' 
              label={
                <div className='flex items-center gap-3'>
                  <p>{color.name}</p>
                  <p style={{backgroundColor:color.hex}} 
                    className={`h-5 w-5 rounded-full ${color.name === "White" ? "border": ""}`}></p>
                </div>
              } />
          )}
          
        </RadioGroup>
      </FormControl>
      </section>

    </div>
  )
}

export default FilterSection