import Icon from '../assets/icons/gym.png'
import React from 'react'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <div>
      <button>
        <img src={Icon} alt="" />
        <div className="">{item}</div>
      </button>

    </div>
  )
}

export default BodyPart