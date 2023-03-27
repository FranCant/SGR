import { box } from "@/lib/staticData";

const Work = () => {
  return (
    <>
      <section className="w-full py-14 bg-fill text-gray-100 z-0">
        <div className="px-4">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
            nuestro metodo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-bgSecondary">
            Como realizamos nuestro trabajo
          </h2>
        </div>
        <div className="grid gap-6 my-10 layout md:grid-cols-2 xl:grid-cols-4">
          {box.map(({ id, header, body }) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-delay="50"
              className="flex flex-col p-8 space-y-4 rounded-md bg-white scale-100 active:drop-shadow-md hover:drop-shadow-md hover:scale-[1.04] active:scale-[0.97] transition duration-100  animate-shadow"
            >
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-fill text-gray-100">
                {id}
              </div>
              <h2 className="text-main">{header}</h2>
              <p className="text-base md:text-lg font-light text-gray-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
