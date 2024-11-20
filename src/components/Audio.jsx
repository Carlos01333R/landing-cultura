import AudioPlayerWithSmallCover from "./AudioPlayerWithSmallCover";

export default function AudioComponent({ src, coverSrc, title, artist }) {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-5">
      <h2 className="text-4xl font-playfair w-full md:w-[70%] text-center">
        Audios utilizados
      </h2>
      <small className="text-sm mt-2 text-center font-playfairRegular mb-2">
        Audio utilizados para la creación del proyecto.
      </small>

      <div className="w-full flex flex-col md:flex-row gap-2">
        <AudioPlayerWithSmallCover
          src={src}
          coverSrc={coverSrc}
          title={title}
          artist={artist}
        />
      </div>
    </section>
  );
}
