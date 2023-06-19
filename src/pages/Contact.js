import Herotext from "../components/Headtext";
const Contact = () => {
  const causes = [
    {
      id: 1,
      title: "Sales",
      desc: " Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers",
      phn: "1800 10 0001 ",
    },
    { 
      id: 2,
      title: "Complaints",
      desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
      phn: "1800 10 0002",
    },
    {
      id: 3,
      title: "Returns",
      desc: "Hassle-free returns and exchanges. We understand that sometimes products just don't work out. ",
      phn: "1800 10 0003",
    },
    {
      id: 4,
      title: "Marketing",
      desc: "Our marketing team works collaboratively with businesses to help them grow and succeed",
      phn: "1800 10 0004",
    },
  ];
  return (
    <section>
      <Herotext textt="Contact us" />
      <div className="py-16 ">
        <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
          We're here to help you
        </h2>
        <div className="flex w-[85%] mx-auto gap-5  py-10 px-0">
          {causes &&
            causes.map((cause) => {
              return (
                <div className="text-center bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5" key={cause.id}>
                  <h3 className="text-gray-900 font-semibold text-2xl">
                    {cause.title}
                  </h3>
                  <p className="text-lg text-gray-700">{cause.desc}</p>
                  <a
                    href={`tel:${cause.phn}`}
                    className="text-orange-500 font-semibold text-xl"
                  >
                    {cause.phn}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
