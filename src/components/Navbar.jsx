import React from 'react'

const imageUrl = "https://a0.muscache.com/im/pictures/da6ccae2-c381-450d-90f8-54223f6eb6dd.jpg?im_q=highq&im_w=240"

const Navbar = () => {
  return (
    <nav className="hidden md:flex w-screen h-14 justify-between px-12 items-center bg-gray-100">
        <div>
            <h1 className="font-bold">ขอแนะนำ Airbnb 2022 Release: พฤศจิกายน</h1>
        </div>
        <ul className="flex flex-row items-center cursor-pointer">
            <div className="flex items-center px-4 border-r border-gray-300 hover:underline">
                <img className="w-16 rounded-lg" src={imageUrl} />
                <li className="pl-2">เล่นวีดีโอ</li>
            </div>
            <li className="pl-4 hover:underline">มีอะไรใหม่บ้างมาดูกัน</li>
        </ul>
    </nav>
  )
}

export default Navbar