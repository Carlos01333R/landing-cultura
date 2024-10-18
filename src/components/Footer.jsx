export default function FooterComponent() {
  return (
    <footer
      style={{
        width: "500px",
        maxWidth: "calc(100% - 2rem)",
        backdropFilter: "blur(10px)", // Aplica el blur al fondo
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo con opacidad
      }}
      className="w-full mx-auto flex justify-between items-center py-2 px-4 text-white border-2 border-[#4f3f66] rounded-xl mb-2  shadow-orange-200 font-playfair mt-20"
    >
      <div className="w-full flex justify-center items-center">
        <p className="font-playfairRegular text-sm text-center">
          © 2024 Carlos Rodriguez | ❣️ Yelidza Batista
        </p>
      </div>
    </footer>
  );
}
