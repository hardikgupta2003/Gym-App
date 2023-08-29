import React, { useEffect, useState } from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import { exerciseOptions } from '../utils/fetchData';
import {fetchData} from '../utils/fetchData'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search,setSearch]=useState('');
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);


  async function handleSearch(){
    if(search){
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions) 
    const searchedExercises=exerciseData.filter((item)=> item.name.toLowerCase().includes(search) || item.target.toLowerCase().includes(search)||item.bodyPart.toLowerCase().includes(search) ||item.equipment.toLowerCase().includes(search));
    window.scrollTo({
      top:1800,left:100,behavior:'smooth'
    });
    setSearch('');
    setExercises(searchedExercises);
    }
  }
  return (
    <div className=' flex flex-col items-center mt-[37px] justify-center p-[20px]'>
        <div className="font-bold lg:text-[44px] md:text-[30px] mb-[49px] flex items-center">
            Awesome Exercises You <br/>
                  Should Know
        </div>

        <div className="relative mb-[72px] flex  items-center justify-around gap-2">
          <div className='border-2 border-darkred rounded-md'>
            <input type="text" className='h-[56px] font-semibold rounded-[4px] border-none lg:w-[1170px] md:w-[350px] bg-white  outline-none  text-[28px]    ' value={search}
            onChange={(e)=> setSearch(e.target.value.toLocaleLowerCase())}
            placeholder='Search Exercises' 
            /></div>
            <div>
            <button
            className='search-btn bg-orangee text-white w-[173px] sm:w-[80px] h-[56px] leading-5 text-[20px] md:text-[14px] rounded-md' onClick={handleSearch} >Search</button></div>
        </div>
        <div className="relative w-full p-[20px]">
            <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/>
        </div>
    </div>
  )
}

export default SearchExercises