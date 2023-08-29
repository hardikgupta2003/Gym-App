import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const ExerciseCard = ({exercise}) => {
  return (
    <div className='exercise-card hover:scale-110'>

        <Link to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt="" loading='lazy'/>
        <div className="flex ">
            <button className='ml-[21px] text-white bg-[#FFA9A9] text-[14px] rounded-[20px] uppercase'>
                {exercise.bodyPart}
            </button>
            <button className='ml-[21px] text-white bg-[#FCC757] text-[14px] rounded-[20px] uppercase'>
                {exercise.target}
            </button>
        </div>
        <div className="ml-[21px] text-white bg-[#000] lg:text-[24px] sm:text-[20px] rounded-[20px] uppercase">
           {exercise.name} 
        </div>
        </Link>
    </div>
  )
}

export default ExerciseCard