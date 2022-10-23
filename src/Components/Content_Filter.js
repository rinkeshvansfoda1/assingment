import React, { useState } from 'react'
// import Datepicker from 'flowbite-datepicker/Datepicker';


export default function Content_Filter({data, setDataCopy}) {
  const [selected,setSelected] = useState("$100-$500");
  console.log(selected)

  const searchHandler = () => {
    let copyData = data.map(item => {return {...item}})
    if(copyData === data) console.log("same");
    let filter = copyData.filter(item => {
      if(selected === "$100-$500") {
        if(item.price <= 500 && item.price >= 100) {
          // console.log(item)
          return item
        }
      }
      if(selected === "$500-$2500") {
        if(item.price<=2500 && item.price >500){
          return item
        }
      }
      if(selected === "$2500-$4000") {
        if(item.price<=4000 && item.price >2500){
          return item
        }
      }
      if(selected === "$4000-$7000") {
        if(item.price<=7000 && item.price >4000){
          return item
        }
      }
      if(selected === "all") {
        return item;
      }
    })
    console.log(filter);
    setDataCopy(filter);
  }

  return (
    <div className="pl-28 pr-28 bg-gray-100">
      <div className="h-24 py-2 box-border border-collapse border bg-white rounded-md">
        <div className="lg:pb-6 grid grid-cols-5 divide-x">
          <div className="flex-auto px-5 h-20 py-3">
            <>
              <h6>Location</h6>
            </>
            <div className="font-bold text-size-5">New York, USA</div>
          </div>
          <div className="flex-auto px-5 h-16 py-3">
            <>
              <h6>When</h6>
            </>
            <input className='font-bold' type="date" name="" id="" />
            {/* {
              <script src="https://unpkg.com/flowbite@1.5.3/dist/datepicker.js"></script>
            } */}
            {/* <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input datepicker datepicker-title="Flowbite datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
            </div> */}
          </div>
          <div className="flex-auto px-5 h-20 py-3">
            <>
              <h6>Price</h6>
            </>
            <select name="price" id="pricee" className='font-bold text-black'onChange={e => setSelected(e.target.value)}>
              <option value="all" className='font-bold text-black'>ALL</option>
              <option value="$100-$500" className='font-bold text-black'>$100-$500</option>
              <option value="$500-$2500" className='font-bold text-black'>$500-$2500</option>
              <option value="$2500-$4000" className='font-bold text-black'>$2500-$4000</option>
              <option value="$4000-$7000" className='font-bold text-black'>$4000-$7000</option>
            </select>
          </div>
          <div className="flex-auto px-5 h-20 py-3">
            <>
              <h6>Property Type</h6>
            </>
            <select name="house" id="houses" className='font-bold text-black'>
              <option value="Houses" className='font-bold text-black'>Houses</option>
              <option value="Land" className='font-bold text-black'>Land</option>
            </select>
          </div>
          <div id='Submit' className="grid px-5 py-2">
            <a href="#0" onClick={searchHandler}
              className="p-6 pt-4 text-center font-medium text-white bg-purple-500 rounded hover:bg-purple-400 transition duration-300">Search</a>
          </div>
        </div>
      </div>
    </div>
  );
}