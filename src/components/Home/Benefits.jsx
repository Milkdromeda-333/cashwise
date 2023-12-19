import StartFreeTrialBtn from '../lib/StartFreeTrialBtn'

export default function Benefits() {

  return (
      <section>
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
          
      
    </section>
  )
}