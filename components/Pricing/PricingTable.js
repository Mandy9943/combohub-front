import ShopHubButton from "../ShopHubButton/ShopHubButton";

const PricingTable = () => {
  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Precios y envío transparentes</span>
            <h2>
              <b> Planes</b> asequibles
            </h2>

            <p>
              Descubre nuestros planes de envío y elige el que mejor se adapte a
              tus necesidades. ¡Envía tus productos a Cuba de forma rápida y
              económica!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h3>Básico</h3>
                <div className="price">
                  $100 <span>/ compras hasta $599 de compra</span>
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> El peso del producto se
                    cobra a $7.
                  </li>

                  <li>
                    <i className="ri-check-fill"></i> Sin cobro de envíos.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Entrega rápida en 24 horas
                    en Cuba después de todos los pagos necesarios.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Colaboradores en Cuba para
                    facilitar entregas.
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1100"
                data-aos-once="true"
              >
                <h3>Avanzado</h3>
                <div className="price">
                  $130 <span>/ compras entre $600 y $1999</span>
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> El peso del producto se
                    cobra a $6.
                  </li>

                  <li>
                    <i className="ri-check-fill"></i> Sin cobro de envíos.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Entrega rápida en 24 horas
                    en Cuba después de todos los pagos necesarios.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Colaboradores en Cuba para
                    facilitar entregas.
                  </li>
                </ul>

                <div className="most-popular">
                  <span>Más Popular</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h3>Premium</h3>
                <div className="price">
                  $250 <span>/ compras de o superiores a $2000</span>{" "}
                </div>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> El peso del producto se
                    cobra a $6.
                  </li>

                  <li>
                    <i className="ri-check-fill"></i> Sin cobro de envíos.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Entrega rápida en 24 horas
                    en Cuba después de todos los pagos necesarios.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Colaboradores en Cuba para
                    facilitar entregas.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Artículo gratuito a
                    elección del cliente.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ShopHubButton />
        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <img src="/images/pricing/pricing-bg-shape.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
