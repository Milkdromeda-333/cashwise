import Header from "../components/Home/Header"
import Benefits from "../components/Home/Benefits"
import WatchDemo from "../components/Home/WatchDemo";
import GettingStarted from "../components/Home/GettingStarted";
import Results from "../components/Home/Results";



export default function Home() {

  return (
      <div className="
      pt-20
      flex flex-col gap-32
      ">
          <div className="flex flex-col gap-10  mx-8 lg:h-[85vh] justify-center md:flex-row">
            <Header />
            <WatchDemo/>
          </div>
      
      <Benefits />
      <GettingStarted />
      <Results/>
    </div>
  )
}

