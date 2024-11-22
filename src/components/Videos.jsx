export default function VideosComponent() {
  return (
    <section className="w-full mt-14 md:mt-24 mb-24">
      <h5 className="text-2xl md:text-5xl font-playfair w-full  text-center">
        La Evolución del Baile: De lo Tradicional a lo Contemporáneo
      </h5>
      <div className="w-full  mt-20 mb-10">
        <h4 className="mt-10 mb-4 text-2xl  md:text-3xl ">
          Cumbia: Ritmos Ancestrales.
        </h4>
        <section className="w-full flex flex-col justify-center items-center">
          <video
            className="w-full rounded-xl"
            src="/video2.mp4"
            controls
          ></video>
        </section>
        <p className="text-xl font-playfairRegular mt-5 mb-5">
          La cumbia es una expresión artística que nacen de la fusión cultural
          entre los pueblos indígenas y africanos durante la época colonial. La
          cumbia, con su ritmo cadencioso y elegante, simboliza la unión de
          tambores africanos y melodías indígenas.
        </p>
      </div>

      <div className="w-full  mt-20 mb-10">
        <h4 className="mt-10 mb-6  text-2xl  md:text-3xl">
          {" "}
          Champeta: El Sabor del Caribe .
        </h4>
        <section className="w-full flex flex-col justify-center items-center">
          <video
            className="w-[500px] rounded-xl"
            src="/video1.mp4"
            controls
          ></video>
        </section>
        <p className="text-xl font-playfairRegular mt-5 mb-5">
          La champeta surge en la costa caribeña de Colombia como un género
          vibrante y auténtico que une raíces africanas y sonidos modernos. Este
          baile, lleno de movimientos dinámicos y alegría, es un reflejo de la
          vida cotidiana, la creatividad y el orgullo cultural de los habitantes
          de la región. Más que un ritmo, la champeta es un lenguaje que une
          comunidades y exalta su identidad.
        </p>
      </div>

      <div className="w-full  mt-20 mb-10">
        <h4 className="mt-10 mb-6  text-2xl  md:text-3xl ">
          {" "}
          Hip Hop: Voz y Movimiento Urbano .
        </h4>
        <section className="w-full flex flex-col justify-center items-center">
          <video
            className="w-full rounded-xl"
            src="/video3.mp4"
            controls
          ></video>
        </section>
        <p className="text-xl font-playfairRegular mt-5 mb-5">
          El hip hop, nacido en los barrios urbanos, se ha convertido en un
          movimiento global que combina música, danza y expresión artística.
          Este estilo contemporáneo representa la creatividad y la protesta,
          permitiendo a los jóvenes contar sus historias a través de movimientos
          cargados de energía y precisión.
        </p>
      </div>
    </section>
  );
}
