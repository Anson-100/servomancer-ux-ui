import React from "react"

const Font = () => {
  return (
    <div id="Font" className="h-full">
      <div className="h-full w-5/6 m-auto py-20">
        {" "}
        <div className="">
          <p className="text-center pt-20 text-gray-300 text-lg">Font Page</p>
          <p className="text-center text-gray-400">hover for higher contrast</p>
        </div>
        {/* TEXT */}
        <div className="mt-10 flex flex-col gap-20 text-gray-500">
          <div className="hover:text-gray-300">
            {" "}
            <p className="text-center">
              Current Text: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center text-lg">
              Current Text: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center text-xl">
              Current Text: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
          </div>

          <div className="hover:text-gray-300">
            {" "}
            <p className="text-center font-opensans">
              Open Sans: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-opensans text-lg">
              Open Sans: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-opensans text-xl">
              Open Sans: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
          </div>
          <div className="hover:text-gray-300">
            <p className="text-center font-franklin">
              Libre Franklin: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-franklin text-lg">
              Libre Franklin: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-franklin text-xl">
              Libre Franklin: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
          </div>
          <div className="hover:text-gray-300">
            <p className="text-center font-quest">
              Questrial: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-quest text-lg">
              Questrial: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
            <p className="text-center font-quest text-xl">
              Questrial: The essential browser extension for Tennis TV and
              Tennis Channel Plus subscribers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Font
