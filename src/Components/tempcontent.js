import React from 'react'
import data from './dummydata.json'

export default function Content() {
    return (
        <div className="pl-28 pr-28 bg-gray-100">
          <div className="py-5">
        <div className="flex">
            <div className="flex flex-col rounded-lg shadow-md w-full m-1 overflow-hidden sm:w-80">
            <img className="sm:w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GCLlsnJWpN214aTwvRDa--EOMZQvdMGl00jAz8Zr1g&s"
                alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex">
                {
                    data.map(dataa => {
                        return(
                            <div className='box' key={dataa.id}>
                                {dataa.price}
                            </div>
                        )
                    })
                }
                <p className="text-purple-500">$2495</p> /month
                </div>
                <div className="py-1 font-bold text-xl mb-2">Palm Harbor</div>
                <p className="text-gray-700 text-base">
                2699 Green Valley, Highland Lake, FL
                </p>
            </div>
            <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="px-6 py-2 flex">
                <p className="text-left md:text-left w-full">3 Bed</p>
                <p className="text-center md:text-center w-full">2 Bathroom</p>
                <p className="text-right md:text-right w-full">Size</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}
