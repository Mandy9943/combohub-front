import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Link from "next/link";

const termsOfService = [
  {
    id: 1,
    title: "Introducción",
    text: `El presente documento establece los términos y condiciones generales de uso de la página web https://www.technextit.com/ (en adelante, “el sitio web”) y de los servicios que se ofrecen a través de la misma. El acceso y uso del sitio web atribuye la condición de usuario y supone la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en las presentes condiciones generales de uso. El usuario se compromete a leer atentamente el presente documento en cada una de las ocasiones en que se proponga utilizar el sitio web y los servicios que en él se ofrecen.`,
  },
  {
    id: 2,
    title: "Elegibilidad",
    text: "Al utilizar nuestro sitio web y servicios, usted declara que es mayor de edad en su jurisdicción y que tiene la capacidad legal para aceptar y cumplir con estos Términos.",
  },
  {
    id: 3,
    title: "Productos y servicios",
    text: "ComboHub ofrece una selección de combos de productos de moda y estilo. Hacemos todo lo posible para describir y presentar con precisión nuestros productos en nuestro sitio web, pero no garantizamos que las descripciones y representaciones gráficas sean completamente precisas, confiables o libres de errores.",
  },
  {
    id: 4,
    title: "Pedidos y disponibilidad",
    text: "Nos reservamos el derecho de rechazar cualquier pedido realizado en nuestro sitio web a nuestra discreción. Además, nos reservamos el derecho de limitar o cancelar la cantidad de productos en un pedido. Si un producto no está disponible después de que se haya realizado un pedido, nos pondremos en contacto con usted para informarle y discutir las opciones disponibles.",
  },
  {
    id: 5,
    title: "Política de devoluciones",
    text: "Debido a la naturaleza única de nuestros combos y la logística de envío, no podemos aceptar devoluciones una vez que los productos han sido entregados. Sin embargo, nos esforzamos por garantizar la satisfacción del cliente en cada compra. Si tiene algún problema con su pedido, por favor póngase en contacto con nuestro equipo de atención al cliente.",
  },
  {
    id: 6,
    title: "Propiedad intelectual",
    text: "El contenido de este sitio web, incluidos, entre otros, los textos, imágenes, logotipos, marcas, nombres comerciales, diseños, gráficos, software, música, sonido y otros materiales (en adelante, “el contenido”) es propiedad de ComboHub o de terceros que han autorizado su uso en el sitio web. El usuario se compromete a respetar los derechos de propiedad intelectual e industrial titularidad de ComboHub o de terceros. El usuario se abstendrá de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que esté instalado en los contenidos. El usuario se abstendrá de realizar cualquier acto que pudiera dañar, inutilizar o sobrecargar el sitio web o que impidiera, de cualquier forma, la normal utilización del mismo. El usuario se abstendrá de utilizar los contenidos con fines o efectos ilícitos, prohibidos en este documento o que, de cualquier forma, puedan causar perjuicio o impedir el normal funcionamiento del sitio web. El usuario se abstendrá de suprimir, alterar, eludir o manipular cualquier dispositivo de protección o sistema de seguridad que esté instalado en los contenidos. El usuario se abstendrá de realizar cualquier acto que pudiera dañar, inutilizar o sobrecargar el sitio web o que impidiera, de cualquier forma, la normal utilización del mismo. El usuario se abstendrá de utilizar los contenidos con fines o efectos ilícitos, prohibidos en este documento o que, de cualquier forma, puedan causar perjuicio o impedir el normal funcionamiento del sitio web.",
  },
  {
    id: 7,
    title: "Limitación de responsabilidad",
    text: "En la medida permitida por la ley, ComboHub no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la incapacidad de utilizar nuestro sitio web o nuestros servicios.",
  },
  {
    id: 8,
    title: "Cambios en los Términos",
    text: "Nos reservamos el derecho de modificar estos Términos en cualquier momento y a nuestra discreción. Al continuar utilizando nuestro sitio web y servicios después de que se hayan implementado cambios en los Términos, usted acepta cumplir con los Términos modificados. Si no está de acuerdo con los Términos modificados, no puede continuar utilizando nuestro sitio web y servicios.",
  },
  {
    id: 9,
    title: "Legislación aplicable y jurisdicción",
    text: "Estos Términos se regirán e interpretarán de acuerdo con las leyes del país en el que se encuentra ComboHub. Cualquier disputa que surja de estos Términos estará sujeta a la jurisdicción exclusiva de los tribunales de ese país.",
  },
  {
    id: 10,
    title: "Indemnización",
    text: "Usted acepta indemnizar, defender y eximir de responsabilidad a ComboHub, sus directores, empleados, agentes y afiliados de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, hechos por cualquier tercero debido a o que surja de su uso del sitio web o de los servicios, su violación de estos Términos o su infracción de cualquier ley o los derechos de un tercero.",
  },
  {
    id: 11,
    title: "Terminación",
    text: "Nos reservamos el derecho de suspender o terminar su acceso a nuestro sitio web y servicios en cualquier momento y sin previo aviso si consideramos que ha incumplido estos Términos o si sospechamos de actividad fraudulenta, abusiva o ilegal.",
  },
  {
    id: 12,
    title: "Divisibilidad",
    text: "Si cualquier disposición de estos Términos se considera inválida, nula o por cualquier motivo inaplicable, dicha disposición se considerará separable de estos Términos y no afectará la validez y aplicabilidad de las disposiciones restantes.",
  },
  {
    id: 13,
    title: "Contacto",
    text: "SSi tiene alguna pregunta o inquietud sobre estos Términos, no dude en ponerse en contacto con nosotros a través de la sección de contacto en nuestro sitio web o enviando un correo electrónico a info@combohub.com.",
  },
];

export default function TermsOfService() {
  return (
    <>
      <NavbarTwo />

      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(/images/page-banner/banner-bg-4.jpg` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Términos del servicio</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Términos del servicio</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="terms-of-service-content">
                <div className="terms-of-service-image">
                  <img src="/images/terms-of-service.jpg" alt="image" />
                </div>
                <p>
                  <i>Términos del servicio de ComboHub.</i>
                </p>

                {termsOfService.map((content, i) => (
                  <>
                    <h3>
                      <span>{i + 1}.</span> {content.title}
                    </h3>
                    <p>{content.text}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  );
}
