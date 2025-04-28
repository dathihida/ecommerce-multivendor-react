import React, { useState } from 'react'
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/levelTwo/furnitureLevelTwo'
import { electronicsLevelTwo } from '../../../data/category/levelTwo/electronicsLevelTwo'
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree'
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree'
import { furnitureLevelThree } from '../../../data/category/levelThree/furnitureLevelThree'
import { electronicsLevelThree } from '../../../data/category/levelThree/electronicsLevelThree'
import { useFormik } from 'formik'
import { uploadToCloudinary } from '../../../Util/uploadToCoudinary'
import { Alert, Button, CircularProgress, FormControl, FormHelperText, Grid2, IconButton, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import { AddPhotoAlternate, Close } from '@mui/icons-material'
import { colors } from '../../../data/Filter/color'
import { mainCategory } from '../../../data/category/mainCategory'
import { useAppDispatch } from '../../../State/Store'
import { createProduct } from '../../../State/seller/sellerProductSlice'
import { showSnackbar } from '../../../State/SnackBarSlice'


const categoryTwo: {[key:string]: any[]} = {
  men: menLevelTwo,
  women: womenLevelTwo,
  kids: [],
  home_furniture: furnitureLevelTwo,
  beauty:[],
  electronics: electronicsLevelTwo,
};

const categoryThree: {[key:string]: any[]} = {
  men: menLevelThree,
  women: womenLevelThree,
  kids: [],
  home_furniture: furnitureLevelThree,
  beauty:[],
  electronics: electronicsLevelThree,
};
const AddProducts = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues:{
      name:"",
      title: "", 
      description: "", 
      mrpPrice: "", 
      sellingPrice: "", 
      quantity: "", 
      color: "", 
      images: [], 
      numRating: "", 
      category: "", 
      category2: "", 
      category3: "", 
      sizes: ""
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await dispatch(createProduct({ request: values, jwt: localStorage.getItem("jwt") }));
    
        if (createProduct.fulfilled.match(res)) {
          // Nếu thêm thành công
          resetForm();
          dispatch(showSnackbar({
            message: "Add product success",
            severity: "success",
            open: true
          }));
        } else {
          // Nếu thêm thất bại
          dispatch(showSnackbar({
            message: "Add product failed",
            severity: "error",
            open: true
          }));
        }
      } catch (error) {
        // Nếu lỗi (network, server lỗi,...)
        dispatch(showSnackbar({
          message: "Something went wrong!",
          severity: "error",
          open: true
        }));
        console.error("Error:", error);
      }
    }        
  })

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  }
  
  const handleRemoveImage = (index:number) =>{
    const updateIdImage = [...formik.values.images];
    updateIdImage.splice(index, 1);
    formik.setFieldValue("images", updateIdImage);
  }

  const childCategory = (category: any, parentCategoryId: any) =>{
    return category.filter((child: any) =>{
      return child.parentCategoryId == parentCategoryId;
    })
  }

  const handleCloseSnackbar = () =>{
    setOpenSnackbar(false);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className='space-y-4 p-4'>
        <Grid2 container spacing={2}>
          <Grid2 className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />

            <label className="relative cursor-pointer" htmlFor="fileInput">
              <span
                className="w-24 h-24 flex items-center justify-center p-3 border rounded-md border-gray-400"
              >
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                  <CircularProgress />
                </div>
              )}
            </label>

            {/* Danh sách hình ảnh */}
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="w-24 h-24 object-cover rounded-md border border-gray-300"
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => handleRemoveImage(index)}
                    size="small"
                    color="error"
                    sx={{
                      position: "absolute",
                      top: 2,
                      right: 2,
                      backgroundColor: "rgba(255,255,255,0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,1)",
                      },
                    }}
                  >
                    <Close sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid2>

          <Grid2 size={{xs:12}}>
              <TextField
                fullWidth
                id="quantity"
                name="quantity"
                label="Quantity"
                onChange={formik.handleChange}
                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                helperText={formik.touched.quantity && formik.errors.quantity}
                value={formik.values.quantity}
              />
          </Grid2>

          <Grid2 size={{xs:12}}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="name"
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                value={formik.values.name}
              />
          </Grid2>

          <Grid2 size={{xs:12}}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                value={formik.values.title}
              />
          </Grid2>
          <Grid2 size={{xs:12}}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          id="description"
                          name="description"
                          label="Description"
                          onChange={formik.handleChange}
                          error={formik.touched.description && Boolean(formik.errors.description)}
                          helperText={formik.touched.description && formik.errors.description}
                          value={formik.values.description}
                        />
          </Grid2>



          <Grid2 size={{xs:12, md:4, lg:4}}>
            <FormControl fullWidth error={formik.touched.color && Boolean(formik.errors.color)} required>
              <InputLabel id="color-label">Color</InputLabel>
              <Select
                labelId='color-label'
                id="color" name='color' value={formik.values.color} onChange={formik.handleChange} label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {colors.map((color, index)=>
                  <MenuItem value={color.name}>
                    <div className='flex gap-3'>
                      <span style={{backgroundColor: color.hex}} 
                        className={`h-5 w-5 rounded-full ${color.name === "White" ? "border" : ""}`}></span>
                      <p>{color.name}</p>
                    </div>
                  </MenuItem>
                )}
              </Select>
              {formik.touched.color && formik.errors.color && (
                <FormHelperText>{formik.errors.color}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:4}}>
              <TextField
                fullWidth
                id="mrpPrice"
                name="mrpPrice"
                label="MrpPrice"
                onChange={formik.handleChange}
                error={formik.touched.mrpPrice && Boolean(formik.errors.mrpPrice)}
                helperText={formik.touched.mrpPrice && formik.errors.mrpPrice}
                value={formik.values.mrpPrice}
              />
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:4}}>
              <TextField
                fullWidth
                id="sellingPrice"
                name="sellingPrice"
                label="SellingPrice"
                onChange={formik.handleChange}
                error={formik.touched.sellingPrice && Boolean(formik.errors.sellingPrice)}
                helperText={formik.touched.sellingPrice && formik.errors.sellingPrice}
                value={formik.values.sellingPrice}
              />
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:3}}>
            <FormControl fullWidth error={formik.touched.sizes && Boolean(formik.errors.sizes)} required>
              <InputLabel id="sizes-label">Sizes</InputLabel>
              <Select
                labelId='sizes-label'
                id="sizes" name='sizes' value={formik.values.sizes} onChange={formik.handleChange} label="Color"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="FREE">FREE</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>
              </Select>
              {formik.touched.sizes && formik.errors.sizes && (
                <FormHelperText>{formik.errors.sizes}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:3}}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)} required>
              
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId='category-label'
                id="category" 
                name='category' 
                value={formik.values.category} 
                onChange={formik.handleChange} 
                label="Category"
              >
                {
                  mainCategory.map((item)=>(
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))
                }
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:3}}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)} required>
              
              <InputLabel id="category2-label">Category2</InputLabel>
              <Select
                labelId='category2-label'
                id="category2" 
                name='category2' 
                value={formik.values.category2} 
                onChange={formik.handleChange} 
                label="Second category"
              >
                {
                  formik.values.category && 
                    categoryTwo[formik.values.category]?.map((item:any) =>(
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))
                }
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{xs:12, md:4, lg:3}}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)} required>
              
              <InputLabel id="category-label">Category3</InputLabel>
              <Select
                labelId='category3-label'
                id="category3" 
                name='category3' 
                value={formik.values.category3} 
                onChange={formik.handleChange} 
                label="Third category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  formik.values.category2 && 
                    childCategory(
                      categoryThree[formik.values.category], 
                      formik.values.category2
                  )?.map((item:any) =>(
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))
                }
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid2>

          <Grid2 size={{xs:12}}>
            <Button
              sx={{p:"14px"}}
              color='primary'
              variant='contained'
              fullWidth
              type='submit'
            >
              {
                false ? <CircularProgress size="small" sx={{width:"27px", height: "27px"}}/> : "Add Product"
              }
            </Button>
          </Grid2>
        </Grid2>
      </form>    
    </div>
  )
}

export default AddProducts