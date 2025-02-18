import React from 'react'
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo'
import { electronicsLevelThree } from '../../../data/category/levelThree/electronicsLevelThree'
import { furnitureLevelThree} from '../../../data/category/levelThree/furnitureLevelThree'
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree'
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree'
import { Box } from '@mui/material'
import { electronicsLevelTwo } from '../../../data/category/levelTwo/electronicsLevelTwo'
import { furnitureLevelTwo } from '../../../data/category/levelTwo/furnitureLevelTwo'
import zIndex from '@mui/material/styles/zIndex'
import { useNavigate } from 'react-router-dom'

const categoryTwo:{[key:string]:any[]}={
    men: menLevelTwo,
    women: womenLevelTwo,
    electronics: electronicsLevelTwo,
    home_furniture: furnitureLevelTwo
}

const categoryThree:{[key:string]:any[]} = {
    men: menLevelThree,
    women: womenLevelThree,
    electronics: electronicsLevelThree,
    home_furniture: furnitureLevelThree
}

const CategorySheet = ({selectCategory, setShowSheet}:any) => {
    const navigate = useNavigate()
    const childrenCategory = (category:any, parentCategoryId:any) => {
        return category.filter((child:any) => child.parentCategoryId == parentCategoryId)
    }
  return (
    <Box sx={{zIndex:2}} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
        <div className='flex text-sm flex-wrap'>
            {
                categoryTwo[selectCategory]?.map((item, index) => 
                    <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                        <p className='text-primary-colors mb-5 font-semibold'>{item.name}</p>
                        <ul className='space-y-3'>
                            {
                                childrenCategory(categoryThree[selectCategory], item.categoryId).map((item:any) =><div>
                                    <li onClick={()=> navigate("/products/"+item.categoryId)}
                                        className='hover:text-primary-colors cursor-pointer'>
                                        {item.name}
                                    </li>
                                </div>
                            )}
                            
                        </ul>
                    </div>
                )
            }
        </div>
    </Box>
  )
}

export default CategorySheet