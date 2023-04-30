import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import useSwr from "swr";
import SingleServiceCard from "./SingleServiceCard";
const AllServicesCard = () => {
  const { data: services } = useSwr(
    `${baseApiUrl}/api/services?populate=*`,
    fetcher
  );

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
      </div>
    </>
  );
};

export default AllServicesCard;
