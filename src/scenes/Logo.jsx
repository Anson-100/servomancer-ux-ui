import React from "react"
import { ForwardIcon } from "@heroicons/react/16/solid"
import Logo1 from "../assets/logo-1.png"
import Logo2 from "../assets/logo-2.png"

const Logo = () => {
  return (
    <div id="Logo" className="h-full">
      <div className="h-full w-5/6 m-auto py-20 flex flex-col items-center justify-center">
        {" "}
        <p className="text-center pt-20 text-gray-300 text-lg p-20">
          Logo Page
        </p>
        {/* LOGO */}
        <div className="flex flex-col items-center">
          {" "}
          <div className="flex justify-center items-center text-blue6">
            <h1 className="font-montserrat text-[3.5rem] z-10 text-center font-bold logo-shadow">
              SERVOMANCER
            </h1>
            <ForwardIcon className="h-16 svg-shadow" />
          </div>
          <div className="flex justify-center items-center text-yellow1">
            <h1 className="font-montserrat text-[3.5rem] z-10 text-center font-bold logo-shadow">
              SERVOMANCER
            </h1>
            <ForwardIcon className="h-16 svg-shadow" />
          </div>
          <div className="flex justify-center items-center text-pink2">
            <h1 className="font-montserrat text-[3.5rem] z-10 text-center font-bold logo-shadow">
              SERVOMANCER
            </h1>
            <ForwardIcon className="h-16 svg-shadow" />
          </div>
          <h1 className="font-montserrat text-blue1 text-[3.5rem] z-10 text-center font-bold logo-shadow-2">
            SERVOMANCER
          </h1>
          <div className="flex justify-center items-center text-blue6">
            <h1 className="font-montserrat text-[3.5rem] z-10 text-center font-bold logo-shadow-3">
              SERVOMANCER
            </h1>
          </div>
          <img src={Logo1} className="w-1/2" />
          <img src={Logo2} className="w-1/2" />
        </div>
      </div>
    </div>
  )
}

export default Logo
