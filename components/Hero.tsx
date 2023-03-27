import Image from "next/image";

function Hero() {
  return (
    <div>
      <div className="relative">
        <div className="relative w-full min-h-screen">
          <Image className="object-cover" src="/images/heronew.jpeg" alt="sgr interiorismo" fill priority />
        </div>

        <div className="flex items-center absolute top-0 left-0 bg-gradient-to-tl from-gray-900/20 to-gray-900/60 w-full min-h-screen">
          <div className="layout -mt-24 md:-mt-0">
            <h1
              data-aos="fade-up"
              data-aos-delay="50"
              className="text-4xl sm:text-5xl md:text-7xl max-w-3xl w-full font-bold text-white"
            >
              Estamos Dispuestos a Revolucionar tu Mundo
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-xl font-light text-white py-4"
            >
              Asesorar es nuestro fuerte, junto a la creatividad de un equipo
              joven, crearemos espacios únicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
