import { BiRightArrowCircle } from "react-icons/bi";
export default function Header() {

  return (
     <section className="
          bg-brand-lightMint text-brand-mint
          p-8 rounded-3xl
          flex flex-col gap-8
          md:w-1/2
          ">
          <h1 className="
            text-5xl font-brand
            lg:text-8xl
          ">
              Finances made easy
          </h1>

          <p>Effortlessly navigate your personal finances, from budgeting to savings, with ease and confidence</p>

      <a href="" className="
          group
          w-full bg-white rounded-3xl px-4 py-1
          flex flex-row justify-center items-center gap-1
          lg:w-fit
          ">
              <BiRightArrowCircle className="text-2xl duration-700 group-hover:translate-x-0.5" />
              Start your free trial
          </a>
      </section>
  )
}