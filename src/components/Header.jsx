import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function HeaderComponent() {
  return (
    <header
      style={{
        width: "800px",
        maxWidth: "calc(100% - 2rem)",
        backdropFilter: "blur(10px)", // Aplica el blur al fondo
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Fondo con opacidad
      }}
      className="w-full mx-auto flex justify-between items-center py-2 px-4 text-white border-2 border-transparent rounded-xl mb-2 mt-1 shadow-orange-200 font-playfair"
    >
      <div className="flex gap-x-2 justify-center items-center">
        <a href="/" className="flex gap-x-2 items-center">
          <img className="w-10 h-10 rounded-full" src="/logo.png" alt="" />
          <p>Yelidza Batista</p>
        </a>
      </div>
      <div className="hidden md:block">
        <section className="flex gap-x-2 justify-center items-center ">
          <a href="/" className="underline text-sm">
            Home
          </a>
          <a href="/historia" className="underline text-sm">
            Historia
          </a>
          <a href="/multimedia" className="underline text-sm">
            Multimedia
          </a>
          <a href="/redes" className="underline text-sm">
            Redes sociales
          </a>
        </section>
      </div>
      <div className="block md:hidden">
        <Dropdown>
          <DropdownTrigger>
            <button>
              <img src="/src/icons/menu.svg" alt="menu" />
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem>
              <a href="/" className=" text-sm">
                Home
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="/historia" className=" text-sm">
                Historia
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="/multimedia" className=" text-sm">
                Multimedia
              </a>
            </DropdownItem>
            <DropdownItem>
              <a href="/redes" className=" text-sm">
                Redes sociales
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}
