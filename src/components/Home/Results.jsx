import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


export default function Results() {

    const cardData = [
    // {
    //     metric: "$10k",
    //     message: "Monthly revenue growth for the past quarter!",
    //     name: "John Doe",
    //     org: "Green Light Accounting"
    // },
    // {
    //     metric: "$5k",
    //     message: "Net profit increase compared to last year.",
    //     name: "Alice Smith",
    //     org: "SmartPay Solutions"
    // },
    // {
    //     metric: "$1.5M",
    //     message: "Total invoice payments processed this month!",
    //     name: "Michael Johnson",
    //     org: "Gold Standard Finance"
    // },
    // {
    //     metric: "$500k",
    //     message: "Outstanding invoices collected this quarter.",
    //     name: "Emily Brown",
    //     org: "Silver Shield Financial"
    // },
    // {
    //     metric: "$100k",
    //     message: "Total payroll expenses for the year!",
    //     name: "David Wilson",
    //     org: "Platinum Payroll Services"
    // },
    {
        metric: "$3.5k",
        message: "Average monthly savings from cost optimization.",
        name: "Sophia Lee",
        org: "Budget Masters"
    },
    {
        metric: "$20M",
        message: "Investment funding secured for expansion!",
        name: "Matthew Martinez",
        org: "Growth Capital Partners"
    },
    {
        metric: "$50k",
        message: "Annual tax savings through deductions and credits!",
        name: "Olivia Taylor",
        org: "Tax Solutions Unlimited"
    }
];

  return (
      <section className="flex flex-col">
          <div className="flex flex-col justify-between items-end gap-8  mx-8 md:flex-row">
            <h2 className='secondHeader md:max-w-[70%]'>
                Some results from our clients using <span className="font-brand">Cashwell</span>
              </h2>
              
              <div className="flex flex-row gap-4">
                  <FaArrowLeft className="text-brand-darkGreen text-2xl" />
                  <FaArrowRight className="text-brand-darkGreen text-2xl" />
              </div>
          </div>
          
          <div className="flex flex-row w-full gap-4">
              {cardData.map(card => {
                  return (
                      <div key={card.name} className="w-[50vw] p-4 bg-brand-darkGreen text-brand-lightMint">
                          <div className="">
                              <span>{card.metric}</span>
                              <span>{card.message}</span>
                          </div>

                          <div className="">
                              <button>View results</button>
                              <div className="">
                                  <h3>{card.name}</h3>
                                  <span>{card.org}</span>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>
    </section>
  )
}