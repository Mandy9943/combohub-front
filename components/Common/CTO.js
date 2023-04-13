import { fetcher } from "@/utils/api";
import useSwr from "swr";
const CTO = () => {
  const { data: cto } = useSwr("/api/cto?populate=*", fetcher);

  return (
    <>
      {cto && (
        <div className="overview-area pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {cto.data.attributes.ctoInfo.map((info) => (
                <div className="col-lg-3 col-md-6" key={info.id}>
                  <div className="overview-card">
                    <h3>{info.title}</h3>
                    <span>{info.text}</span>
                    <div className="overview-shape">
                      <img
                        src="/images/overview/overview-shape.png"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTO;
