import { service } from "@/lib/staticData";

export const Services = () => {
  return (
    <>
      <section className="w-full text-dark pt-20 bg-white">
        <div className="layout flex flex-col p-6">
          <h2 className="py-4 text-3xl font-bold text-center">
            Nuestros Servicios
          </h2>
          <div className="divide-y divide-gray-700">
            {service.map(({ id, header, body, icon: Icon }) => (
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                key={id}
                className="group grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0"
              >
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <Icon className="group-hover:text-sky-800 h-20 w-20 text-fill transition-all ease-in-out duration-200" />
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                 
                  <span className="text-xl font-bold md:text-2xl">
                    {header}
                  </span>
                  <span className="mt-4 text-base md:text-xl text-dark">
                    {body}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
