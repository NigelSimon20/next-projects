import React from 'react'
// import { FaBug } from "react-icons/fa6"

interface ButtonProps{
    text : string,
    color : string,
    bgcolor : string,
}

const Button = (props: ButtonProps) => {
      return (
        <button type='button' className={`py-2 px-10 rounded-md bg-${props.bgcolor} text-${props.color} text-sm`}>{props.text}</button>
      )
}

export default Button