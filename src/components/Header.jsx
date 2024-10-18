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
      className="w-full mx-auto flex justify-between items-center py-2 px-4 text-white border-2 border-[#4f3f66] rounded-xl mb-2 mt-1 shadow-orange-200 font-playfair"
    >
      <div className="flex gap-x-2 justify-center items-center">
        <img className="w-10 h-10 rounded-full" src="/logo.png" alt="" />
        <p>Yelidza batista</p>
      </div>
      <div>
        <Dropdown>
          <DropdownTrigger
            style={{
              backgroundImage:
                "linear-gradient(180deg, #4f3f66 0%, #3b2e5f 25%, #1f1f59 50%, #001253 75%, #00004e 100%)",
            }}
            className="p-0"
          >
            <Button variant="bordered" className="text-white">
              Visitar
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              <a href="">Youtube</a>
            </DropdownItem>
            <DropdownItem key="copy">
              <a href="">Facebook</a>
            </DropdownItem>
            <DropdownItem key="edit">
              <a href="">Instagram</a>
            </DropdownItem>
            <DropdownItem key="delete">
              <a href="">Soundcloud</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}
