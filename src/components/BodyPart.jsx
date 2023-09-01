import Icon from '../assets/icons/gym.png'
import React from 'react'
import { Stack } from '@mui/material'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
        <img src={Icon} alt="icon" className='w-[40px] h-[40px]' />
        <div className="uppercase font-bold text-darkred text-[24px]">{item}</div>
     
   </Stack>
  )
}

export default BodyPart