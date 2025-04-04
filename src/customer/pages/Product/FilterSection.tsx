import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { colors } from '../../../data/Filter/color'
import { useSearchParams } from 'react-router-dom';
import { price } from '../../../data/Filter/price';
import { discount } from '../../../data/Filter/discount';

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleColorToggle = () => {
    setExpendColor(!expendColor);
  };
  const updateFilterParams = (e: any) => {
    const { value, name } = e.target;
    if(value) {
      searchParams.set(name, value);
    }else{
      searchParams.delete(name);
    }
    setSearchParams(searchParams);
  };

  const clearAllFilters = () => {
    console.log("clear all filters", searchParams);
    searchParams.forEach((value:any, key:any) => {
      searchParams.delete(key);
    });
    setSearchParams(searchParams);
  };
  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between px-9 h-[40px] lg:border-r'>
        <p className='text-lg font-semibold'>
          Filters
        </p>
        <Button onClick={clearAllFilters}
          size='small' variant='contained' className='secondary cursor-pointer font-semibold'>
          
          Clear All
        </Button>
      </div>

      <Divider/>

      <div className='space-y-6 px-9'>
      
        <section >
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
            onChange={updateFilterParams}
          >
            {colors.slice(0, expendColor?colors.length:5).map((color) => 
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
        <div>
          <button
            onClick={handleColorToggle}
            className='text-primary-colors cursor-pointer hover:text-teal-300'>
            {expendColor? "Hide" : ` +${colors.length-5} Show more`}
          </button>
        </div>
        </section>

        
        <section >
        <FormControl>
          <FormLabel 
            sx=
            {{
              fontSize: "16px",
              fontWeight: "bold",
              color: "teal[600]",
              pb:"14px"
            }} 
            className='text-2xl font-semibold'
            id="price">
              Price
            </FormLabel>
          <RadioGroup
          onChange={updateFilterParams}
            aria-labelledby="price"
            defaultValue=""
            name="price"
          >
            {price.map((item, index)=>(
              <FormControlLabel 
              key={item.name}
              value={item.value}
              control={<Radio size="small"/>}
              label={item.name}
              />
            ))}
            
          </RadioGroup>
        </FormControl>
        </section>

        <section >
        <FormControl>
          <FormLabel 
            sx=
            {{
              fontSize: "16px",
              fontWeight: "bold",
              color: "teal[600]",
              pb:"14px"
            }} 
            className='text-2xl font-semibold'
            id="price">
              Discount
            </FormLabel>
          <RadioGroup
          onChange={updateFilterParams}
            aria-labelledby="discount"
            defaultValue=""
            name="discount"
          >
            {discount.map((item, index)=>(
              <FormControlLabel 
              key={item.name}
              value={item.value}
              control={<Radio size="small"/>}
              label={item.name}
              />
            ))}
            
          </RadioGroup>
        </FormControl>
        </section>
      </div>

    </div>
  )
}

export default FilterSection