import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";
import React from "react";
import SingleServiceCard from "./SingleServiceCard";

const AllServicesCard = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`);
      setServices(response.data);
      // console.log(response.data)
    };
    getServices();
  }, []);
  return (
    <>
      <div className="services-area bg-with-14042C-color rounded-0 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Nuestros combos</span>
            <h2>
              Combos <b> Destacados</b>
            </h2>
            <p>
              Ofrecemos una amplia selección de combos prefabricados que
              incluyen productos de alta calidad a precios increíbles. Descubre
              nuestros combos y encuentra lo que necesitas.
            </p>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.data.map((service) => (
                <div className="col-lg-4 col-md-6" key={service.id}>
                  <SingleServiceCard service={service} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <img src="/images/services/services-shape-1.png" alt="image" />
        </div>
        <div className="services-shape-2">
          <img src="/images/services/services-shape-2.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default AllServicesCard;
