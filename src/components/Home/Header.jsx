import StartFreeTrialBtn from "../lib/StartFreeTrialBtn";

export default function Header() {

  return (
     <section className="
          bg-brand-lightMint text-brand-mint
          p-8 rounded-3xl
          flex flex-col gap-8
          md:w-1/2
          ">
          <h1 className="header">
              Finances made easy
          </h1>

          <p>Effortlessly navigate your personal finances, from budgeting to savings, with ease and confidence</p>

      <StartFreeTrialBtn styles='bg-white' />
      </section>
  )
}