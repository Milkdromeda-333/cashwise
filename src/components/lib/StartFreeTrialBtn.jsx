import { BiRightArrowCircle } from "react-icons/bi";

export default function StartFreeTrialBtn({styles}) {

  return (
      <a href="" className={`
          group 
          rounded-3xl px-4 py-1
          flex flex-row justify-center items-center gap-1
          ${styles}
          lg:w-fit
          `}>
              <BiRightArrowCircle className="text-2xl duration-700 group-hover:translate-x-0.5" />
              Start your free trial
          </a>
  )
}