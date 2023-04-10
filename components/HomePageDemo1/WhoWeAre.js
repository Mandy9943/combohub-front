import baseApiUrl from "@/utils/baseApiUrl";
import axios from "axios";
import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

const WhoWeAre = () => {
  const [whoWeAre, setWhoWeAre] = React.useState();
  React.useEffect(() => {
    const getWhoWeAre = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/who-we-are?populate=*`
      );
      setWhoWeAre(response.data);
      // console.log(response.data);
    };
    getWhoWeAre();
  }, []);
  return (
    <>
      {whoWeAre && (
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src={whoWeAre.data.attributes.image.data.attributes.url}
                    alt={
                      whoWeAre.data.attributes.image.data.attributes
                        .alternativeText
                    }
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <span>{whoWeAre.data.attributes.subTitle}</span>
                  <h3>
                    <b> Quiénes Somos</b>
                  </h3>
                  <ReactMarkdown>
                    {whoWeAre.data.attributes.longDec}
                  </ReactMarkdown>

                  <div className="about-btn">
                    <Link href={whoWeAre.data.attributes.btnLink}>
                      <a className="default-btn">
                        {whoWeAre.data.attributes.btnText}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-shape-1">
            <img src="/images/about/about-shape.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default WhoWeAre;
