import React from "react"

const Avatar = (props) => {
  return (
    <div className={`w-full h-full flex justify-center items-center ${props.className}`} style={props.style}>
      <img src={props.image} alt={props.alt} className="block rounded-full w-full h-full object-cover" style={{ width: props.width, height: props.width }} />
    </div>
  )
}

export default Avatar
