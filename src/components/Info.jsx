export default function InfoComponent() {
  return (
    <section class="w-full flex flex-col justify-center items-center mt-20 mb-2">
      <h2 class="text-3xl md:text-5xl font-playfair w-full  text-center mt-2 mb-2">
        Descripción de la página web
      </h2>

      <img
        src="/info.jpg"
        alt="foto del proyecto"
        class="w-[450px] mt-10 mb-10 rounded-xl object-cover"
      />
      <p class="text-lg font-playfairRegular w-full md:w-[85%] mb-5  ">
        La página web está diseñada para ser una plataforma interactiva que
        celebre y difunda la rica herencia cultural de Cartagena,
        específicamente la influencia africana en sus expresiones musicales y
        dancísticas. Este espacio busca educar, inspirar y conectar a las
        personas con sus raíces culturales, proporcionando contenido histórico
        sobre la evolución de géneros como la cumbia, la champeta y el mapalé,
        así como su relevancia en la identidad cartagenera actual. A través de
        recursos multimedia como audios, videos, infografías y herramientas
        innovadoras como un asistente de inteligencia artificial, la página
        permite una experiencia inmersiva. Además, ofrece acceso a redes
        sociales y material descargable para facilitar la exploración y el
        aprendizaje. Su propósito final es preservar estas tradiciones, promover
        su valoración entre las nuevas generaciones y proyectarlas como un
        legado cultural vivo al mundo.
      </p>
    </section>
  );
}
