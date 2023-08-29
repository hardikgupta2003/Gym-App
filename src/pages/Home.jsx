import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart,setBodyPart]=useState('all');
  return (
    <div>
      <HeroBanner/>
      <SearchExercises
      setExercises={setExercises}
      setBodyPart={setBodyPart}
      BodyPart={bodyPart}
      />
      <Exercises
      setExercises={setExercises}
      exercises={exercises}
      bodyPart={bodyPart} />
    </div>
  )
}

export default Home
