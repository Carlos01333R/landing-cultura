import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD8I82TIyK2Jpw6blIEgR7qD70Y864FfbT_m1QMrfMqqEu_W6Fl73hKXvLniOZ3J6311he2gAr10SPkvEpcjJja9csC7YOmG2Ig608qkMxd-zNXs7TKliRewfh0h0QPN0Hs4C2awBJAA/s1600/afros_dos.jpg",
  "https://i.ytimg.com/vi/bpB-mW_jDcE/maxresdefault.jpg",
  "https://www.elinformador.com.co/images/stories/sociales/2020/03-marzo/05social_2.jpg",
  "https://c8.alamy.com/comp/2H8FHG2/champeta-music-group-los-reyes-de-la-champeta-close-the-last-day-of-the-idartes-10-aos-musical-festival-that-carries-rock-metal-punk-salsa-and-hip-hop-music-across-two-weekends-20-21-and-27-28-of-november-at-the-simon-bolivar-park-and-scenario-la-media-torta-in-bogota-colombia-on-november-28-2021-2H8FHG2.jpg",
  "https://www.elpolideportivo.com/wp-content/uploads/2022/07/HIP-HOP-2.jpg",
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
