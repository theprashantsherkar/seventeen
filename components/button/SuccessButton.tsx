import React from 'react'
import './style.css';
import { inputType } from './ShakeButton';

function SuccessButton({value}:inputType) {
  return (
      <button className="btn"> { value}
      </button>
  )
}

export default SuccessButton