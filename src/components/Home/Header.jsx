import { BiRightArrowCircle } from "react-icons/bi";
export default function Header() {

  return (
     <section className="
          bg-brand-lightMint text-brand-mint
          p-8 mt-4 rounded-3xl
          flex flex-col gap-8
          ">
          <h1 className="
            text-5xl font-brand
          ">
              Finance made easy
          </h1>

              <p>Effortlessly navigate your personal finances, from budgeting to savings, with ease and confidence</p>

          <a href="" className="
              w-full bg-white 
              flex flex-row justify-center items-center gap-1
              rounded-3xl 
              ">
              <BiRightArrowCircle className="text-2xl" />
                  Start your free trial
              </a>
      </section>
  )
}