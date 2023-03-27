import { BsPinterest } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { AiFillFormatPainter } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";

export const externalLinks = [
  { link: "https://www.instagram.com/sgr.dsign/", icon: AiOutlineInstagram },
  { link: "https://ar.pinterest.com/sgrdsign/_saved/", icon: BsPinterest },
  {
    link: "https://es.linkedin.com/in/susana-g%C3%B3mez-ramos-b306796",
    icon: AiFillLinkedin,
  },
  {
    link: "https://api.whatsapp.com/send?phone=34609702975",
    icon: AiOutlineWhatsApp,
  },
];

export const box = [
  {
    id: "1",
    header: "Programa de necesidades",
    body: "A través de una entrevista con el cliente podremos conocer sus necesidades, sus gustos y estilo de vida, creando así un proyecto único adaptado por completo.",
  },
  {
    id: "2",
    header: "Toma de datos",
    body: "Consta de la medición de la vivienda o local, un reportaje fotográfico y el estudio de las necesidades del cliente.",
  },
  {
    id: "3",
    header: "Propuesta",
    body: "Asesoramos aportando ideas, distribución de los espacios y los materiales a utilizar. Mostraremos al cliente planos de distribución, plantas y alzados con las soluciones adaptadas a sus necesidades. En esta fase realizamos los primeros bocetos, incluyendo una selección de colores y acabados. Al cliente se le presenta en la reunión el proyecto mediante infografías 3D.",
  },
  {
    id: "4",
    header: "Presupuesto",
    body: "Elaboramos el presupuesto disponible para su ejecución en función de lo acordado con el cliente en la entrevista.",
  },
];

export const service = [
  {
    id: "1",
    header: "PROYECTO Y REFORMAS INTEGRALES",
    body: "Creamos proyectos y reformas integrales en Alicante, trabajamos con viviendas, residencias, empresas, tiendas, locales comerciales también realizamos reformas de baños, viviendas, residencias, comercios, tiendas, chalet. Trabajamos con los mejores profesionales y empresas constructoras de Alicante.",
    icon: FaTools,
  },
  {
    id: "2",
    header: "INTERIORISMO Y DECORACION",
    body: "Nuestro equipo te aportará infinitas soluciones de diseño, distribución y decoración. Te ayudaremos con los muebles, los textiles y la iluminación. Nos encargaremos de la selección de muebles, recepción, montaje e instalación. ¡Déjalo en nuestras manos y prepárate para disfrutar!",
    icon: AiFillFormatPainter,
  },
  {
    id: "3",
    header: "EJECUCION Y DIRECCION DE OBRA",
    body: "Realizamos proyectos integrales, desde el inicio hasta el final de cada proyecto. Nosotros nos ocuparemos de todo, revisando cada detalle y sobre todo terminando en los plazos acordados.",
    icon: TbTools,
  },
  {
    id: "4",
    header: "REFORMAS DE COCINAS",
    body: "Estamos especializados en diseño de muebles de cocina a medida y reformas de cocinas , el corazón del hogar se merece todo el protagonismo. La cocina es un espacio de nuestra casa en donde mas tiempo pasamos, muchos clientes ya han confiado en nosotros para renovar su espacio.",
    icon: BsFillHouseFill,
  },
];
