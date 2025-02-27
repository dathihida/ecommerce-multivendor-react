import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Filter, FilterAlt } from '@mui/icons-material'
import FilterSection from './FilterSection'
import { useTheme, useMediaQuery, Box, IconButton, FormControl, InputLabel, Select, MenuItem, Divider, Pagination, dividerClasses } from '@mui/material'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchAllProducts } from '../../../State/customer/ProductSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import qs from "query-string";

const Product = () => {
  const themeIs = useTheme();
  const isLarge = useMediaQuery(themeIs.breakpoints.up("lg"));
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const [searchParam, setSearchParam] = useSearchParams();
  const {category}=useParams();
  const {product} = useAppSelector((store)=>store)


  console.log("Product", product.products);
  const handleSortChange = (event: any) => {
    setSort(event.target.value);
  }

  const handlePageChange = (value: number) => {
    setPage(value);
  };

//   useEffect(() =>{
//     const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
//     const color = searchParam.get("color");
//     const minDiscount =searchParam.get("discount")?Number(searchParam.get("discount")):undefined;
//     const pageNumber = page-1;
//     const newFilter = {
//         color: color || "",
//         minPrice: minPrice?Number(minPrice):undefined,
//         maxPrice: maxPrice?Number(maxPrice):undefined,
//         minDiscount,
//         pageNumber
//     }
//     dispatch(fetchAllProducts({newFilter}))
//   }, [category, searchParam])

useEffect(() => {
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const color = searchParam.get("color");
    const minDiscount = searchParam.get("discount") ? Number(searchParam.get("discount")) : undefined;
    const pageNumber = page - 1;

    // Tạo object filter đúng định dạng
    const filterParams: Record<string, any> = {
        color,
        minPrice: minPrice ? Number(minPrice) : undefined,
        maxPrice: maxPrice ? Number(maxPrice) : undefined,
        minDiscount,
        pageNumber
    };

    // Xóa các key có giá trị undefined
    Object.keys(filterParams).forEach(key => filterParams[key] === undefined && delete filterParams[key]);

    // Chuyển object thành query string
    const queryString = qs.stringify(filterParams, { skipNull: true, skipEmptyString: true });

    // Dispatch API với query string hợp lệ
    dispatch(fetchAllProducts(queryString));
}, [category, searchParam]);
  return (
    <div className='-z-10 mt-10'>
        <div>
            <h1 className='text-3xl text-center font-bold text-gray-700 pb-5 px-9 uppercase space-x-2'>
                Men sarees
            </h1>
        </div>

        <div className='lg:flex'>
            <section className='filter_section hidden lg:block w-[20%]'>
                <FilterSection/>
            </section>

            <div className='w-full lg:w-[80%] space-y-5'>
                <div className='flex justify-between items-center px-9 h-[40px]'>
                    <div className='relative w-[50%]'>
                        {
                            !isLarge && (
                            <IconButton>
                                <FilterAlt/>
                            </IconButton>
                            )
                        }
                        {
                            !isLarge && (
                            <Box>
                                <FilterSection/>
                            </Box>
                            )
                        }
                    </div>

                    <FormControl size='small' sx={{width: "200px"}}>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            label="Age"
                            onChange={handleSortChange}>
                            <MenuItem value={"price_low"}>Price: Low - High</MenuItem>
                            <MenuItem value={"price_high"}>Price: High - Low</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Divider/>

                <section className='products_section flex flex-wrap gap-5 px-9'>
                    {product.products.map((item) => <ProductCard item={item}/>)}
                </section>
                        
                <Pagination count={10} page={page} 
                    onChange={(e, value) => handlePageChange(value)} 
                    className='flex justify-center py-5'/>
            </div>
            
        </div>
    </div>
  )
}

export default Product