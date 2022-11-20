import React from 'react'
import Image from './Image'

const Content = () => {
    const image = "https://a0.muscache.com/im/pictures/miso/Hosting-714659286766381030/original/ca8633af-3e34-4d5d-9911-52dc04c93f6a.jpeg?im_w=720"
    return (
        <div className="my-4 w-full h-full flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
                <Image url={image} />
            </div>
        </div>
    )
}

export default Content