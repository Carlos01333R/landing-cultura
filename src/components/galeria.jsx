import Carrusel from "./Carrusel";
export default function Gallery() {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-14">
      <h2 className="text-4xl font-playfair w-full md:w-[70%] text-center">
        Galería de Imágenes
      </h2>
      <p className="text-sm mt-2 text-center font-playfairRegular">
        Explora la belleza visual de nuestros bailes folclóricos.
      </p>

      <Carrusel />
      <small className="text-sm mt-2 text-center font-playfairRegular">
        Una serie de imágenes sobre el tema "La influencia africana en la música
        y la danza en Cartagena" podría capturar escenas que reflejan la rica
        herencia cultural africana en esta región de Colombia.{" "}
      </small>
    </section>
  );
}
