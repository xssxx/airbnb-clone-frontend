import React from 'react'

const Image = (props) => {
  return (
    <div className="mx-10 flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition duration-200">
        <img className="object-cover rounded-xl" src={props.url} />
        <p className="font-bold">House</p>
        <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className="font-bold">B 29,999</p>
    </div>
  )
}

export default Image