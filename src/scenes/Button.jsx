import React from "react"

const Button = () => {
  return (
    <div id="Button" className="h-full">
      <div className="h-full w-5/6 m-auto py-20 flex flex-col items-center justify-center">
        <p className="text-center pt-20 text-gray-300 text-lg p-20">
          Button Page
        </p>

        {/* BUTTONS------------------------------------------------------------------------------------------- */}
        <div className="flex gap-8 justify-center">
          <button className="bg-gradient-rainblue hover:text-pink2 inline-block p-[2px] rounded-lg font-montserrat font-semibold text-yellow1">
            <div className="bg-blue1 rounded-md p-2">Current Btn</div>
          </button>
          <button
            className="bg-pink1 rounded-md px-2 font-montserrat font-semibold shadow-1 active:translate-y-[1px] 
          active:translate-x-[1px] hover:bg-pink2"
          >
            Download
          </button>{" "}
          <button
            className="bg-gray-300 rounded-md px-2 font-montserrat font-semibold shadow-1 active:translate-y-[1px] 
          active:translate-x-[1px] hover:bg-gray-200"
          >
            Download
          </button>{" "}
          <button
            className="rounded-md px-2 font-montserrat hover:underline text-yellow1 font-semibold shadow-3 active:translate-y-[1px] 
          active:translate-x-[1px]"
          >
            Download
          </button>
          <button
            className="button-1 text-gray-200 rounded-md px-2 font-montserrat font-semibold shadow-1 active:translate-y-[1px] 
          active:translate-x-[1px] hover:bg-pink2 hover:text-gray-900"
          >
            Download
          </button>
          <button className="bg-gradient-rainblue-2 shadow-4 inline-block p-[3px] rounded-lg font-montserrat font-semibold text-blue1 ">
            <div className="shadow-2 bg-gray-300 hover:bg-gray-200 rounded-md p-2">
              Download
            </div>
          </button>
          <button
            className="bg-gray-400 rounded-md px-2 font-montserrat font-semibold shadow-1 active:translate-y-[1px] 
          active:translate-x-[1px] hover:bg-gray-300 border-t-white border-b-gray-600 border-r-gray-500 border-l-gray-200 border-2"
          >
            Download
          </button>{" "}
          <button className="bg-gradient-gray text-gray-200 rounded-md px-2 font-montserrat font-semibold shadow-4  border-t-gray-500 border-b-gray-900 border-r-gray-800 border-l-gray-700 border-[1px] hover:bg-gradient-gray-2 hover:border-b-gray-800 hover:border-r-gray-700 hover:border-l-gray-600">
            Download
          </button>{" "}
        </div>
      </div>
    </div>
  )
}

export default Button
