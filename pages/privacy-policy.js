import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Link from "next/link";

const politicas = [
  {
    id: 0,
    title: "Protección de datos personales",
    text: "Nos comprometemos a proteger la privacidad y seguridad de sus datos personales. Recopilamos, almacenamos y utilizamos su información personal de acuerdo con las leyes y regulaciones aplicables, y tomamos medidas razonables para garantizar que sus datos estén protegidos contra el acceso no autorizado, la divulgación, la alteración y la destrucción.",
  },
  {
    id: 1,
    title: "Uso de cookies",
    text: "Nuestro sitio web utiliza cookies para mejorar su experiencia de usuario y para comprender cómo interactúan los visitantes con nuestro sitio web. Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con nuestra Política de cookies.",
  },
  {
    id: 2,
    title: "Transmisión segura de datos",
    text: "Utilizamos tecnologías de cifrado, como SSL (Secure Socket Layer), para proteger la transmisión de información sensible, como sus datos de inicio de sesión y detalles de pago. Cuando usted proporciona información en áreas seguras de nuestro sitio web, esta información se cifra para garantizar su confidencialidad.",
  },
  {
    id: 3,
    title: "Protección contra el fraude",
    text: "Nos esforzamos por proteger a nuestros usuarios de actividades fraudulentas y abusivas. Monitoreamos nuestro sitio web y servicios para detectar actividades sospechosas y tomar medidas apropiadas para prevenir y abordar tales actividades. Si sospecha que ha sido víctima de fraude o actividad no autorizada, por favor póngase en contacto con nuestro equipo de atención al cliente de inmediato.",
  },
  {
    id: 4,
    title: "Acceso y control de su información",
    text: "Usted tiene derecho a acceder, modificar y eliminar su información personal almacenada en nuestro sitio web. Para ejercer estos derechos, puede iniciar sesión en su cuenta y actualizar su información, o ponerse en contacto con nuestro equipo de atención al cliente para solicitar asistencia.",
  },
  {
    id: 5,
    title: "Enlaces a sitios web de terceros",
    text: "Nuestro sitio web puede contener enlaces a sitios web de terceros. No nos hacemos responsables de las políticas de privacidad y seguridad de estos sitios web de terceros. Le recomendamos que revise las políticas de privacidad y seguridad de cada sitio web que visite antes de proporcionar su información personal.",
  },
];

export default function PrivacyPolicy() {
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
            <h2>Política de privacidad</h2>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>Política de privacidad</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="privacy-policy-content">
                <div className="privacy-policy-image">
                  <img src="/images/privacy-policy.jpg" alt="image" />
                </div>
                {politicas.map((politica, i) => (
                  <div key={politica.id}>
                    <h3>
                      <span>{i + 1}.</span> {politica.title}
                    </h3>
                    <p>{politica.text}</p>
                  </div>
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
