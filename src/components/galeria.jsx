import Carrusel from "./Carrusel";
export default function Gallery({ title, subtitle, description, images }) {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-14">
      <h2 className="text-4xl font-playfair w-full md:w-[70%] text-center">
        {title}
      </h2>
      <p className="text-sm mt-2 text-center font-playfairRegular">
        {subtitle}
      </p>

      <Carrusel images={images} />
      <small className="text-lg mt-2 text-center font-playfairRegular">
        {description}
      </small>
    </section>
  );
}
