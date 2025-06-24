import React, { useEffect } from 'react'
import { useSearchParams  } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSearchResult } from '@/store/Shop/searchSlice'
const Search = () => {
  const [keyword, setKeyword] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)
  const [searchParams,setSearchParams] = useSearchParams();
  const {searchList} = useSelector(state => state.search);
  const dispatch = useDispatch();

   useEffect(()=>{
     if(keyword && keyword.trim() !=='' && keyword.trim().length >= 3){
       setTimeout(() => {
          setSearchParams(new URLSearchParams(`?keyword=${keyword}`))
          dispatch(getSearchResult(keyword));
       } , 1000);
     }
   },[keyword])

   console.log(searchList);
   

  return (
    <div className=' container mx-auto mt-20 py-8 md:py-6 px-4'>
      <div className='flex justify-center  mb-8'>
        <div className={`transition-all duration-300 ease-in-out flex items-center rounded-md px-2 shadow-md bg-gradient-to-b from-purple-200 to-pink-100 ${
        isFocused ? "w-full" : "w-full"
      } h-[50px]`}>
          <input
          id="input"
          name="keyword"
          type={"text"}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
         onFocus={() => setIsFocused(true)}
        placeholder="Search for products..."
        className={"w-full h-[40px] rounded-md px-4 text-sm text-gray-800 placeholder-gray-500 outline-none bg-white caret-orange-500 transition-all duration-300"}/>
        </div>
       
      </div>
      <div>
        {
          searchList && searchList.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    
            </div>
          ):null
        }
      </div>
    </div>
  )
}

export default Search
