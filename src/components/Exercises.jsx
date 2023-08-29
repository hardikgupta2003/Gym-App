import React from 'react'
import ExerciseCard from './ExerciseCard'
import Pagination from './Pagination'

const Exercises = () => {
  return (
    <div>

      <div className="">
        Showing Results
      </div>

      <div className="">
        <ExerciseCard/>
      </div>

      <div className="">
        {Exercises.length>9 && (
          <Pagination/>
        )}
      </div>
    </div>
  )
}

export default Exercises