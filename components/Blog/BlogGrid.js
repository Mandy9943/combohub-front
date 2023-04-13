import { fetcher } from "@/utils/api";
import baseApiUrl from "@/utils/baseApiUrl";
import { parseImagesUrls } from "@/utils/urls";
import Link from "next/link";
import useSwr from "swr";
const BlogGrid = () => {
  const { data: blogs } = useSwr(`${baseApiUrl}/api/blogs?populate=*`, fetcher);

  return (
    <>
      <div className="blog-area pt-100 pb-100">
        <div className="container">
          <div className="section-title">
            <span>Mantente actualizado</span>
            <h2>
              Lee nuestro blog para recibir noticias <b> actualizadas</b>
            </h2>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.data.map((blog) => (
                <div className="col-lg-6 col-md-12" key={blog.id}>
                  <div
                    className="blog-card"
                    data-aos="fade-up"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="blog-image">
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a>
                              <img
                                src={parseImagesUrls(
                                  blog.attributes.image.data.attributes.url
                                )}
                                alt={
                                  blog.attributes.image.data.attributes
                                    .alternativeText
                                }
                              />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-content">
                          <div className="date">{blog.attributes.date}</div>
                          <h3>
                            <Link href={`/blog/${blog.attributes.slug}`}>
                              <a>{blog.attributes.title}</a>
                            </Link>
                          </h3>
                          <p>{blog.attributes.shortText}</p>
                          <Link href={`/blog/${blog.attributes.slug}`}>
                            <a className="blog-btn">Ver más</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="blog-shape-1">
          <img src="/images/blog/blog-shape-1.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
