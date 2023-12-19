import Header from "../components/Home/Header"
import WatchDemo from "../components/Home/WatchDemo";

export default function Home() {

  return (
    <div className="pt-16 h-[100vh]  p-4 flex flex-col gap-8">
          <Header />
          <WatchDemo/>
    </div>
  )
}

