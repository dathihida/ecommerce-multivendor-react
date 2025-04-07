import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { Filter, FilterAlt } from '@mui/icons-material'
import FilterSection from './FilterSection'
import { useTheme, useMediaQuery, Box, IconButton, FormControl, InputLabel, Select, MenuItem, Divider, Pagination, dividerClasses } from '@mui/material'
import store, { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchAllProducts } from '../../../State/customer/ProductSlice'
import { useParams, useSearchParams } from 'react-router-dom'

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
//     const discount =searchParam.get("discount")?Number(searchParam.get("discount")):undefined;
//     const pageNumber = page-1;
//     // const newFilter = {
//     //     color: color || "",
//     //     minPrice: minPrice?Number(minPrice):undefined,
//     //     maxPrice: maxPrice?Number(maxPrice):undefined,
//     //     discount: discount || "",
//     //     pageNumber: pageNumber
//     // }
//     const newFilter = {
//         color: color || "",
//         minPrice: minPrice ? Number(minPrice) : undefined,
//         maxPrice: maxPrice ? Number(maxPrice) : undefined,
//         discount: discount || "",
//         pageNumber: pageNumber,
//         sort: sort || "",
//         category: category || ""
//     };
//     dispatch(fetchAllProducts(newFilter))
//   }, [category, searchParam, page, sort])

// useEffect(() => {
//     const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
//     const color = searchParam.get("color");
//     const discount = searchParam.get("discount") ? Number(searchParam.get("discount")) : undefined;
//     const sortParam = sort || "";
//     const categoryParam = category || "";
//     const hasFilter = minPrice || maxPrice || color || discount || sortParam || categoryParam;
  
//     const newFilter = hasFilter ? {
//       color: color || "",
//       minPrice: minPrice ? Number(minPrice) : undefined,
//       maxPrice: maxPrice ? Number(maxPrice) : undefined,
//       discount: discount || "",
//       pageNumber: page - 1,
//       sort: sortParam,
//       category: categoryParam
//     } : null;
  
//     dispatch(fetchAllProducts(newFilter));
//   }, [category, searchParam, page, sort]);
  

useEffect(() => {
    const [minPrice, maxPrice] = searchParam.get("price")?.split("-") || [];
    const color = searchParam.get("color");
    const discount = searchParam.get("discount") ? Number(searchParam.get("discount")) : undefined;
    const pageNumber = page - 1;
  
    const newFilter: any = {
      pageNumber,
      sort: sort || ""
    };
  
    if (color) newFilter.color = color;
    if (minPrice) newFilter.minPrice = Number(minPrice);
    if (maxPrice) newFilter.maxPrice = Number(maxPrice);
    if (discount) newFilter.discount = discount;
    if (category) newFilter.category = category;
  
    console.log("New Filter:", newFilter);
    dispatch(fetchAllProducts(newFilter));
  }, [category, searchParam, page, sort]);
  
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
                        
                <Pagination
                    count={product.totalPages}
                    page={page}
                    onChange={(e, value) => handlePageChange(value)}
                    className="flex justify-center py-5"
                    />
            </div>
            
        </div>
    </div>
  )
}

export default Product