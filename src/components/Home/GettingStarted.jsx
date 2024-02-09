

export default function GettingStarted() {

  const cardInfo = [
    {
      num: '01',
      title: 'Setup & Configuration',
      steps: [
        "Sign up for your CashWise account",
        "Set up expenses",
        "Integrate payment processors and add alerts",

      ]
    },
    {
      num: '02',
      title: 'Invoicing & Billing',
      steps: [
        "Create invoices with a few clicks.",
        "Set up and automate recurring payments and track expenses.",
        "View insights and access real-time financial reports."
      ]
    },
    {
      num: '03',
      title: 'Manage your Finances',
      steps: [
        "Send invoices and get paid faster.",
        "Stay on top by automating reminders and monitoring cash flow.",
        "Focus on growing your business with financial clarity."
      ]
    }
  ]

  return (
    <section className="
    bg-gray-200 -mx-3 my-12 px-3 md:-m-16
      flex flex-col justify-center gap-8 md:flex-row
      ">
        
        {/* https://blush.design/illustration/s/zOh1CCnH9zLcJO-w */}
        <div>
          <div className="flex flex-col py-12 sticky top-0 left-0 ">
            <h2 className="smallHeader">Getting Started with CashWise</h2>
            <img
              src="/images/sitOnFloor.png"
              alt="hand drawn person sitting on the floor with computer"
              className="h-3/4 m-0 lg:h-[400px] w-fit" />
                </div>
        </div>
      
      <div className="
         md:py-12
         flex flex-col gap-4 lg:gap-16
         relative md:w-1/2
        ">
          {cardInfo.map(card => (
            <div key={card.num} className="
            bg-white flex flex-col gap-4 rounded-3xl p-8 h-full sticky top-12
            w-full
            md:gap-24
            ">
              <div className="
              flex flex-row justify-between md:w-1/2
              border-[1px] p-2 border-brand-darkGreen rounded-3xl
              ">
                <div className="">{card.num}</div>
                <div className="">{card.title}</div>
              </div>

              <div className="flex flex-col gap-8">
                {card.steps.map(step => (<span key={step} className="block border-b-2 border-gray-200">{ step}</span>))}
              </div>
            </div>
      ))}
          </div>
    </section>
  )
}