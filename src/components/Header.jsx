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
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=61gcoS_5sMQ"
              >
                Youtube
              </a>
            </DropdownItem>
            <DropdownItem key="copy">
              <a href="https://www.facebook.com/profile.php?id=61567040116769&rdid=3a9rRhpxAMwC54pT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FdCDjCvGxZfvDWhgu%2F">
                Facebook
              </a>
            </DropdownItem>
            <DropdownItem key="edit">
              <a
                target="_blank"
                href="https://www.instagram.com/p/DBdLRdLuvqH/?next=%2F"
              >
                Instagram
              </a>
            </DropdownItem>
            <DropdownItem>
              <a
                target="_blank"
                href="https://soundcloud.com/user-65155407/ritmos-y-voces-musica-y-cultura-en-la-cartagena?si=0b072e6db1cb41e8895873037554da0f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              >
                Soundcloud
              </a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}
