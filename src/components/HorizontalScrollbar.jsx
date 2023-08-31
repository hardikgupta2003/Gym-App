import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import rightArrowIcon from '../assets/icons/right-arrow.png'

const LeftArrow =()=>{
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div onClick={scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="" />
    </div>
  );
};
const RightArrow =()=>{
  const {scrollPrev}=useContext(VisibilityContext);

  return (
    <div onClick={scrollPrev()} className="right-arrow">
      <img src={rightArrowIcon} alt="" />
    </div>
  );
};

const HorizontalScrollbar = ({data,bodyParts,setBodyParts,bodyPart}) => {
  return (
   < ScrollMenu>
   {
    data.map((item)=>(
      <div key={item.id || item}
       itemID={item.id || item}
      title={item.id || item} className="my-0 mx-[40px]">
        {
          bodyParts ? <BodyPart/> : <ExerciseCard/>
        }
      </div>
    ))
   }
   </ScrollMenu>
  )
}

export default HorizontalScrollbar