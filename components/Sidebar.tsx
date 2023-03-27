import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Links {
  href: string;
  label: string;
}
interface Props {
  links: Links[];
  isOpen: Boolean;
  close: () => void;
}

export default function Sidebar({ isOpen, links, close }: Props) {
  const pathname = usePathname();

  return (
    <div>
      {" "}
      <div
        className={`bg-main py-20 fixed top-0 left-0 z-20 w-full h-screen md:hidden ease-in-out duration-300 transition-all ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } `}
      >
        {/* list nav */}
        <div className="layout pt-5 flex flex-col items-start justify-start ">
          <nav className="">
            <ul className="text-secondary flex flex-col items-start justify-center space-y-8 text-white text-4xl font-light uppercase">
              {links.map(({ href, label }) => (
                <li
                  key={label}
                  onClick={close}
                  className={`${
                    isOpen ? "opacity-100" : "opacity-0"
                  } transition ease-in-out delay-100 duration-300 cursor-pointer
                ${
                  pathname === href ||
                  (pathname === href + "/[slug]" && "text-light")
                }`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="layout mt-5 border-1 w-full border-secondary" />
          {/* RRSS */}
          <div className="py-5 flex items-center space-x-4 text-white">
            <a href="https://www.instagram.com/sgr.dsign/">
              <AiOutlineInstagram className="h-8 w-8" />
            </a>
            <a href="https://ar.pinterest.com/sgrdsign/_saved/">
              <BsPinterest className="h-8 w-8" />
            </a>
            <a href="https://es.linkedin.com/in/susana-g%C3%B3mez-ramos-b306796">
              <AiFillLinkedin className="h-8 w-8" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=34609702975">
              <AiOutlineWhatsApp className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
