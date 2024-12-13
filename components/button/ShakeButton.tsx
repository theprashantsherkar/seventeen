'use client';
import React from 'react'
import './style.css'

const ShakeButton = ({value}:inputType) => {
  return (
    <button className='button'>{value}</button>
  )
}

export default ShakeButton


export type inputType = {
  value: string,
}