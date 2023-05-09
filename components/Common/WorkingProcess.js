import ShopHubButton from "../ShopHubButton/ShopHubButton";

const WorkingProcess = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <span>Guía rápida para comprar en línea</span>
            <h2>Compra fácil con ComboHub</h2>
            <p>
              Aprende a comprar en línea con nuestra sencilla guía de 4 pasos y
              disfruta de una experiencia de compra segura y exitosa en
              ComboHub.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-1.png" alt="image" />
                  <div className="number">1</div>
                </div>
                <div className="choose-content">
                  <h3>Explora tiendas en línea</h3>
                  <p>
                    Visita Shein, Termo o Amazon y busca productos usando
                    categorías y filtros. Si estás en Cuba, considera usar un
                    VPN para acceder a Shein.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-2.png" alt="image" />
                  <div className="number">2</div>
                </div>
                <div className="choose-content">
                  <h3>Crea tu lista de productos</h3>
                  <p>
                    Copia enlaces de los productos deseados, incluyendo talla y
                    color, y crea una lista con todos los ítems.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-3.png" alt="image" />
                  <div className="number">3</div>
                </div>
                <div className="choose-content">
                  <h3>Envía tu lista a ComboHub</h3>
                  <p>
                    Manda tu lista completa al formulario de ComboHub al hacer
                    click en <b> Hacer lista de compra</b> para generar una
                    orden de compra.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <img src="/images/choose/choose-4.png" alt="image" />
                  <div className="number">4</div>
                </div>
                <div className="choose-content">
                  <h3>Paga y gestiona tu orden</h3>
                  <p>
                    Realiza el pago de la orden de compra y ComboHub procesará
                    tu pedido. Consulta las condiciones y formas de pago en
                    nuestro blog.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShopHubButton />
      </div>
    </>
  );
};

export default WorkingProcess;
