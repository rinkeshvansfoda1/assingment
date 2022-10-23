import React from 'react'


export default function Content({data}) {
    return (
        <div className="pl-28 pr-28 bg-gray-100">
             <div className="flex flex-row flex-wrap justify-center items-center gap-x-5">
        {/* <div className="grid md:flex-row h-auto space-x-4  sm:flex flex-col justify-center items-center"> */}
            {
                data.map(dataa => {
                    return (
                            <div className="py-5">
                                <div className="flex">
                                    <div className="flex flex-col rounded-lg shadow-md w-full m-1 overflow-hidden sm:w-72 md:w-72">
                                        <img className="sm:w-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GCLlsnJWpN214aTwvRDa--EOMZQvdMGl00jAz8Zr1g&s"
                                            alt="Sunset in the mountains" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2 flex" key={dataa.id}>
                                                <p className="text-purple-500">${dataa.price}</p> /month
                                            </div>
                                            <div className="py-1 font-bold text-xl mb-2">{dataa.name}</div>
                                            <p className="text-gray-700 text-base">
                                                2699 Green Valley, Highland Lake, FL
                                            </p>
                                        </div>
                                        <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                                        <div className="px-6 py-2 flex">
                                            <p className="text-left md:text-left sm:w-16 md:w-18">{dataa.number_of_bad}</p>
                                            <p className="text-center md:text-center w-full sm:w-60 md:w-60">{dataa.number_of_bathroom} Bathroom</p>
                                            <p className="text-right md:text-right w-50">{dataa.number_of_size}Size</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
                    )
                })
            }
        </div>
        </div>

    );
}
