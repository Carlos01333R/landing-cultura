import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cdn.colombia.com/images/v2/colombia-info/folclor/region-caribe/bailes-800.jpg",
  "https://i0.wp.com/paisposible.info/wp-content/uploads/2021/12/carnaval-barranquilla-2020.jpg?resize=800%2C468&ssl=1",
  "https://www.elinformador.com.co/images/stories/sociales/2020/03-marzo/05social_2.jpg",
  "https://www.gannett-cdn.com/presto/2021/10/04/PPHX/6bee9625-c68a-46d7-885d-cba08a7ef130-929c4508-b7eb-4022-a2f4-36c91411caf4.jpeg",
];

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-[400px] group  mt-5">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full bg-center bg-cover duration-500 rounded-xl"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}
