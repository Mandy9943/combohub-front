import Link from "next/link";

const KeyFeatures = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Descubre la experiencia ComboHub</span>
            <h2>
              Lo que nos hace <b> diferentes</b>
            </h2>
            <p>
              En ComboHub, nos esforzamos por brindarte la mejor experiencia en
              la compra de combos exclusivos. Aquí te mostramos lo que nos
              distingue.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="#">
                    <a>
                      <img src="/images/choose/choose-1.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">
                      <a>Selección de calidad</a>
                    </Link>
                  </h3>
                  <p>
                    Nuestros expertos seleccionan cuidadosamente cada producto
                    incluido en nuestros combos, garantizando la mejor calidad y
                    valor para nuestros clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="#">
                    <a>
                      <img src="/images/choose/choose-2.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">
                      <a>Entrega puntual</a>
                    </Link>
                  </h3>
                  <p>
                    Nos comprometemos a enviar tus combos de manera eficiente y
                    puntual, para que puedas disfrutar de tus productos lo más
                    rápido posible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="#">
                    <a>
                      <img src="/images/choose/choose-3.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">
                      <a>Precios competitivos</a>
                    </Link>
                  </h3>
                  <p>
                    Nuestro enfoque en la agrupación de productos nos permite
                    ofrecerte precios altamente competitivos, brindándote un
                    gran valor por tu dinero.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="#">
                    <a>
                      <img src="/images/choose/choose-4.png" alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="#">
                      <a>Excelente servicio al cliente</a>
                    </Link>
                  </h3>
                  <p>
                    Nuestro equipo de atención al cliente está aquí para
                    ayudarte en cada paso del proceso, asegurando una
                    experiencia de compra placentera y sin problemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;
