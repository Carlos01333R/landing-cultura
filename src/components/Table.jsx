import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function ComponentTable() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>PANTALLA</TableColumn>
        <TableColumn>IMAGEN</TableColumn>
        <TableColumn>AUDIO</TableColumn>
        <TableColumn>TEXT/INFOGRAFIA</TableColumn>
        <TableColumn>INTERFAZ/CONEXIÓN</TableColumn>
      </TableHeader>
      <TableBody style={{ color: "black" }}>
        <TableRow key="1">
          <TableCell>Pantalla 1: Página Principal </TableCell>
          <TableCell>
            Imagen del paisaje cartagenero con tambores y danzas tradicionales.
          </TableCell>
          <TableCell>
            Música de fondo: tambores suaves y sonidos de olas del mar.
          </TableCell>
          <TableCell>
            Título principal: "Ritmos y Voces de Cartagena: La Influencia
            Africana en Nuestra Cultura". Breve descripción del propósito de la
            página web.
          </TableCell>
          <TableCell>
            Botón de navegación a secciones: Inicio, Historia, Multimedia,
            Explora con IA, Redes Sociales.
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Pantalla 2: Sección de Historia </TableCell>
          <TableCell>
            Historia e Infografía que hace referencia a la historia sobre la
            influencia africana en la música cartagenera.
          </TableCell>
          <TableCell>Música instrumental de cumbia a volumen bajo. </TableCell>
          <TableCell>
            Texto explicativo con subtítulos como: "Evolución y Sincretismo
            Cultural", "La Modernidad: De la Champeta al Mundo".
          </TableCell>
          <TableCell>Botón para explorar historia.</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Pantalla 3: Sección Multimedia </TableCell>
          <TableCell>
            Cuadro de guion multimedia y Galería interactiva con fotos de
            músicos locales, instrumentos tradicionales y danzas típicas.
          </TableCell>
          <TableCell>
            Clips cortos de audios de champeta, cumbia y sonidos africanos.
          </TableCell>
          <TableCell>
            Texto breve acompañando de las imagenes. Por ejemplo: " Esta galería
            celebra la autenticidad".
          </TableCell>
          <TableCell>
            Controles para reproducir audios y botones para desplazarse por la
            galería.
          </TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Pantalla 4: Sección Explora con IA </TableCell>
          <TableCell>
            Imagen del avatar creado, animado y posicionado como guía
            interactiva en esta sección.
          </TableCell>
          <TableCell>
            Audio de bienvenida del avatar: "¡Hola! Estoy aquí para ayudarte a
            explorar nuestra cultura. Haz clic en el botón para más
            información."
          </TableCell>
          <TableCell>
            Texto explicativo: "Pregunta lo que quieras sobre la cultura
            cartagenera, la música y la danza. Nuestra IA responderá tus
            inquietudes."
          </TableCell>
          <TableCell>
            Botón de enlace a una plataforma de IA como ChatGPT. El avatar actúa
            como guía para orientar al usuario hacia el uso del botón.
          </TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Pantalla 5: Redes Sociales </TableCell>
          <TableCell>
            Iconos visualmente atractivos de Facebook, Instagram y YouTube, con
            enlaces a las cuentas asociadas al proyecto.
          </TableCell>
          <TableCell>Fragmento de champeta moderna. </TableCell>
          <TableCell>
            Texto: "Síguenos en nuestras redes para más contenido cultural y
            novedades sobre nuestros eventos y producciones."
          </TableCell>
          <TableCell>
            Botones con hipervínculos directos a las cuentas en redes sociales.
            Opción de compartir la página en redes con un clic.
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
