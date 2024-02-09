import { BsArrow90DegRight } from "react-icons/bs";
import StartFreeTrialBtn from '../lib/StartFreeTrialBtn'

export default function Benefits() {

  return (
      <section className="flex flex-col gap-4  mx-8">
          <div className='flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end'>
              <h2 className='secondHeader md:max-w-[70%]'>We simply finance for effortless goal achievement</h2>
                <StartFreeTrialBtn styles="ring-1 ring-brand-darkGreen w-fit" />
          </div>

          <div className='
            flex flex-col gap-8
            mt-8 h-[100vh]
            lg:flex-row md:h-auto 
          '>
              {/* first bubble */}
              <div className='
              flex flex-col justify-center items-center
              bg-gray-300 rounded-full
              w-full h-1/3
              md:h-52
              '>
                  <span className='text-5xl'>100%</span>
                  <span>Average savings increase</span>
              </div>

              {/* second bubble */}
              <div className='
              flex flex-col justify-center items-center
              bg-brand-darkGreen text-brand-lightMint rounded-full
              w-full h-1/3
              md:h-52
              '>
                  <span className='text-5xl'>$5M+</span>
                  <span>Reduced Expences</span>
              </div>

              {/* last bubble */}
              <div className='
              flex flex-col justify-center items-center
              bg-brand-lightMint text-brand-darkGreen rounded-full
              w-full h-1/3
              md:h-52
              '>
                  <span className='text-5xl'>5/5</span>
                  <span>Average satisfaction ratings</span>
              </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-44 lg:mt-32">

        {/* ONE */}
        <div className="flex flex-col justify-center items-center gap-4 text-center lg:flex-row">
            <img
            src="/images/benefitsCollage_1.jpg"
            alt="person working at computer"
            className="rounded-3xl w-full object-cover h-80 lg:h-[85vh] lg:w-1/2"
          />

          <div
            className="
            flex flex-col justify-center items-center gap-4 
            text-center lg:w-1/2
            ">
            <span className="lg:text-4xl lg:leading-relaxed">Revolutionizes personal finance, offering unparalleled simplicity in budgeting and savings</span>
            
            <button className="group flex flex-row justify-center items-center gap-2">
            <span className="group-hover:text-gray-400  duration-300">Request a Demo</span>
            <BsArrow90DegRight className="group-hover:-rotate-45  duration-300 origin-top-right	" />
          </button>
          </div>
          
        </div>

        {/* TWO */}
         <div className="flex flex-col justify-center items-center gap-4 text-center lg:flex-row-reverse">
            <img
            src="/images/benefitsCollage_2.jpg"
            alt="person working at computer"
            className="rounded-3xl w-full object-cover h-80 lg:h-[85vh] lg:w-1/2"
          />

          <div
            className="
            flex flex-col justify-center items-center gap-4
            text-center  lg:w-1/2
            ">
            <span className="lg:text-4xl lg:leading-relaxed">With intuitive features, we transform financial management into a seamless experience, empowering users to effortlessly achieve their goals.</span>
            
            <button className="group flex flex-row justify-center items-center gap-2">
              <span className="group-hover:text-gray-400  duration-300">Request a Demo</span>
              <BsArrow90DegRight className="group-hover:-rotate-45  duration-300 origin-top-right	" />
           </button>
          </div>
          
        </div>

        {/* THREE */}
         <div className="flex flex-col justify-center items-center gap-4 text-center lg:flex-row">
            <img
            src="/images/benefitsCollage_3.jpg"
            alt="person putting wallet in pocket"
            className="rounded-3xl w-full object-cover h-80 lg:h-[85vh] lg:w-1/2"
          />

          <div
            className="
            flex flex-col justify-center items-center gap-4
            text-center lg:w-1/2
            ">
            <span className="lg:text-4xl lg:leading-relaxed">Say goodbye to financial stress, and let CashWise guide you towards a future of financial success and peace of mind. </span>
            
            <button className="group flex flex-row justify-center items-center gap-2">
              <span className="group-hover:text-gray-400  duration-300">Request a Demo</span>
              <BsArrow90DegRight className="group-hover:-rotate-45  duration-300 origin-top-right	" />
           </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}