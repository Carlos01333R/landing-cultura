import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalHistoria() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl font-playfair  text-center mt-10 mb-2">
          Conoce nuestra historia
        </h2>

        <Button className="text" onPress={onOpen}>
          Presione Aqui
        </Button>
      </div>

      <Modal
        scrollBehavior="inside"
        size="3xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <section class="w-full flex flex-col justify-center items-center">
                  <h2 class="text-5xl font-playfair w-full md:w-[90%] text-center mt-12 mb-2 font-extrabold">
                    Historia de la Influencia Africana en la Música y Danza
                    Cartagenera
                  </h2>
                  <section class="w-full mt-5 mb-5">
                    <div class="w-full flex justify-center items-center">
                      <img
                        class="h-[380px] rounded-xl"
                        src="/public/paisaje1.jpg"
                        alt="paisaje"
                        className="rounded-xl"
                      />
                    </div>
                  </section>

                  <p class="text-lg font-playfairRegular w-full md:w-[85%] mb-5">
                    La música y danza cartagenera tienen sus raíces
                    profundamente ancladas en la diáspora africana, una herencia
                    que se remonta a los tiempos de la esclavitud en el periodo
                    colonial. Durante los siglos XVI y XVII, Cartagena de Indias
                    se convirtió en uno de los principales puertos de comercio
                    de esclavos en América, trayendo consigo no solo a las
                    personas, sino también sus tradiciones, ritmos y formas de
                    expresión cultural. Los esclavizados africanos utilizaban la
                    música y la danza como una forma de resistencia y de
                    conexión espiritual. Los tambores, instrumentos claves
                    traídos por los africanos, se convirtieron en herramientas
                    de comunicación y expresión cultural. Ritmos como la cumbia
                    nacieron en esta época, fusionando elementos africanos con
                    influencias indígenas y europeas. La danza, acompañada por
                    cantos y tambores, no solo era una forma de entretenimiento,
                    sino también una manifestación de libertad en medio de la
                    opresión. Los movimientos enérgicos y circulares reflejaban
                    las tradiciones africanas, mientras que las letras de las
                    canciones narraban historias de esperanza, resistencia y
                    conexión con su tierra natal.
                  </p>
                  <h5 class="text-xl font-playfair w-full md:w-[85%] mb-5">
                    Evolución y Sincretismo Cultural.
                  </h5>
                  <p class="text-lg font-playfairRegular w-full md:w-[85%] mb-5">
                    Con el tiempo, la música y danza africanas comenzaron a
                    mezclarse con otros estilos culturales presentes en
                    Cartagena, creando un sincretismo único. La cumbia, por
                    ejemplo, adoptó la melodía de flautas indígenas y la
                    estructura rítmica de los tambores africanos, mientras que
                    las letras empezaron a incorporar el español. A finales del
                    siglo XIX y principios del XX, la influencia africana se
                    mantuvo viva en festivales locales y celebraciones
                    religiosas como las fiestas de San Basilio de Palenque, uno
                    de los primeros pueblos libres de América. En estos
                    espacios, los ritmos y danzas tradicionales continuaron
                    desarrollándose, dando lugar a géneros como el mapalé y la
                    tambora, que exaltaban la herencia africana.
                  </p>

                  <h5 class="text-xl font-playfair w-full md:w-[85%] mb-5">
                    La Modernidad: De la Champeta al Mundo.
                  </h5>

                  <section class="w-full md:w-[85%] flex justify-start items-start mb-2">
                    <img
                      class="h-[250px] rounded-xl object-cover"
                      src="/NEXF3WQJJNHXRAPLQ3RN6QC6QU.avif"
                      alt=""
                    />
                  </section>

                  <p class="text-lg font-playfairRegular w-full md:w-[85%] mt-5 mb-5">
                    En la segunda mitad del siglo XX, Cartagena vivió una
                    explosión cultural con la llegada de la champeta, un género
                    musical con raíces africanas que incorporó elementos del
                    soukous, el highlife y otros ritmos africanos modernos. La
                    champeta se convirtió en un símbolo de identidad para las
                    comunidades afrodescendientes, especialmente en los barrios
                    populares. En las últimas décadas, la champeta y la cumbia
                    han ganado reconocimiento internacional, siendo
                    reinterpretadas por artistas contemporáneos. Al mismo
                    tiempo, los festivales folclóricos y las iniciativas
                    culturales han ayudado a preservar las tradiciones,
                    permitiendo que las nuevas generaciones se conecten con sus
                    raíces. Hoy en día, la música y danza cartagenera no solo
                    son una expresión artística, sino también un puente entre el
                    pasado y el presente. En las calles de Cartagena y en
                    eventos culturales, los tambores resuenan como testigos de
                    una historia de resiliencia y creatividad. La influencia
                    africana sigue viva, adaptándose a los nuevos tiempos
                    mientras conserva su esencia ancestral. La riqueza musical y
                    dancística de Cartagena es un ejemplo vibrante de cómo las
                    tradiciones pueden evolucionar sin perder su identidad,
                    reafirmando el papel fundamental de la herencia africana en
                    la cultura colombiana.
                  </p>
                </section>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
