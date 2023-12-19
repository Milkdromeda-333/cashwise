import { PiPlayCircleThin } from "react-icons/pi";


export default function WatchDemo() {

  return (
      <div className="rounded-full relative">
          <img
              src="/images/person-at-computer.jpg"
              alt="person at computer"
               className="rounded-3xl"
          />
          <div className="
          absolute bottom-0 right-0
          bg-white p-4
          rounded-3xl rounded-e-none rounded-bl-none	
          flex flex-row justify-center items-center gap-4
          ">
              <PiPlayCircleThin className="text-5xl" />
              Watch Demo
            </div>
    </div>
  )
}