import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import Pagination from '@mui/material/Pagination';
import {fetchData} from '../utils/fetchData'
import Loader from './Loader'
import {exerciseOptions} from '../utils/fetchData'

const Exercises = ({bodyPart,exercises,setExercises}) => {

  const [currentPage,setCurrentPage]=useState(1);
  const [exercisesPerPage]=useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  // pagination
  const indexOfLastExercise =currentPage * exercisesPerPage;
  const indexOfFirstExercise=
  indexOfLastExercise - exercisesPerPage;

  const currentExercises= exercises.slice(indexOfFirstExercise,indexOfLastExercise);
  
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };
  if (!currentExercises.length) return <Loader />;
  return (
    <div id='exercises' className=' mt-[50px]  lg:mt-[109px] p-[20px]'>

      <div className="font-bold lg:text-[44px] sm:text-[30px] mb-[46px] ">
        <h4>Showing Results</h4>
      </div>

      <div className="flex flex-row  flex-wrap justify-center lg:gap-[107px] sm:gap-[50px]">
        {currentExercises.map((exercise,index)=>(
              <ExerciseCard key={index} exercise={exercise}/>
          ))
          
        }
        
      </div>

      <div className=" lg:mt-[114px] sm:mt-[70px] flex items-center justify-center">
      {exercises.length > 9 && (
          <Pagination
          
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </div>
  )
}

export default Exercises