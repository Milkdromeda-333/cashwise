import { PiPlayCircleThin } from "react-icons/pi";

export default function WatchDemo() {

  return (
      <div className="rounded-full relative md:w-1/2">
          <img
              src="/images/person-at-computer.jpg"
              alt="person at computer"
               className="rounded-3xl w-full h-full object-cover"
      />
      
      <span className="absolute top-0 left-4 lg:bottom-1 text-white lg:top-auto">
        Photo by
        <a
          href="https://unsplash.com/@microsoft365?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="underline mx-1"
        >
          Microsoft 365
        </a>
        on
        <a
          href="https://unsplash.com/photos/a-woman-sitting-at-a-table-using-a-laptop-computer-kTFmwxkF5bQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          className="underline mx-1"
        >
          Unsplash
        </a>
      </span>
          
          <div
            className="
            group
            absolute bottom-0 right-0
            bg-white p-4
            rounded-3xl rounded-e-none rounded-bl-none	
            flex flex-row justify-center items-center gap-4
            duration-700 hover:text-gray-500
          ">
              <PiPlayCircleThin className="text-5xl duration-700 group-hover:text-6xl group-hover:text-gray-500" />
              <span className="">Watch Demo</span>
            </div>
    </div>
  )
}