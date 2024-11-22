export default function FooterComponent() {
  return (
    <footer
      style={{
        width: "500px",
        maxWidth: "calc(100% - 2rem)",
        backdropFilter: "blur(10px)", // Aplica el blur al fondo
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo con opacidad
      }}
      className="w-full mx-auto flex justify-between items-center py-2 px-4 text-white  rounded-xl mb-2  shadow-orange-200 font-playfair mt-20"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <p className="">Contacto:</p>
        <p>Yvbatistag@unadvirtual.edu.co</p>
        <p>3233598164</p>
      </div>
    </footer>
  );
}
