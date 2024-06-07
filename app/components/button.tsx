import React from 'react'
import { FaBug } from "react-icons/fa6"

interface ButtonProps{
    text : string,
    color : string,
    bgColor : string,
}

const Button = ({ text, color, bgColor }: ButtonProps) => {
      return (
        <button type='button' className={`py-2 px-10 rounded-md bg-${bgColor} text-${color} text-sm`}><span></span> {text}</button>
      )
}

export default Button