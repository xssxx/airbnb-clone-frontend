import React from 'react'

const Footer = () => {
  return (
    <div className="relative hidden md:flex bg-white bottom-0 h-10 w-screen items-center text-sm border-t border-gray-200">
        <div className="flex justify-between mx-10 w-screen">
            <div>
                <ul className="flex flex-row cursor-pointer">
                    <li className="px-2">&copy; 2022 Airbnb, Inc.</li>
                    <li className="px-2 hover:underline">ความเป็นส่วนตัว</li>
                    <li className="px-2 hover:underline">เงื่อนไข</li>
                    <li className="px-2 hover:underline">แผนผังเว็บไซต์</li>
                </ul>
            </div>
            <div>
                <ul className="flex flex-row cursor-pointer">
                    <li className="px-2 hover:underline border-r border-gray-300">ไทย</li>
                    <li className="px-2 hover:underline border-r border-gray-300">THB</li>
                    <li className="px-2 hover:underline ">การสนับสนุนและแหล่งข้อมูล</li>
                </ul>           
            </div>
        </div>
    </div>
  )
}

export default Footer