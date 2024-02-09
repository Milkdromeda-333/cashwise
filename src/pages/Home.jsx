import Header from "../components/Home/Header"
import Benefits from "../components/Home/Benefits"
import WatchDemo from "../components/Home/WatchDemo";
import GettingStarted from "../components/Home/GettingStarted";


export default function Home() {

  return (
      <div className="
        p-4 pt-20 
      flex flex-col gap-32
      lg:p-16 lg:pt-20
      ">
          <div className="flex flex-col gap-10 lg:h-[85vh] justify-center md:flex-row">
            <Header />
            <WatchDemo/>
          </div>
      
      <Benefits />
      <GettingStarted />
        <div className="h-[1000px] bg-black">ss</div>
    </div>
  )
}

