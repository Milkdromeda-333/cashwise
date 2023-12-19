import Header from "../components/Home/Header"
import WatchDemo from "../components/Home/WatchDemo";

export default function Home() {

  return (
      <div className="
        p-4 pt-20 
      flex flex-col gap-8
      lg:p-16 lg:pt-20
      ">
          <div className="flex flex-col gap-10 lg:h-[85vh] justify-center md:flex-row">
          <Header />
          <WatchDemo/>
          </div>
    </div>
  )
}

