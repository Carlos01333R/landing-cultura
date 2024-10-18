export default function DescargarDocumento() {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "/documento.pdf";
    link.download = "documento.pdf";
    link.click();
  };
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundImage:
          "linear-gradient(180deg, #4f3f66 0%, #3b2e5f 25%, #1f1f59 50%, #001253 75%, #00004e 100%)",
      }}
      class="py-2 px-4 rounded-xl mt-2 mb-3"
    >
      Descargar Documento
    </button>
  );
}
