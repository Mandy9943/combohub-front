import baseApiUrl from "./baseApiUrl";

export const urls = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Combos",
    path: "/services/services",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Términos",
    path: "/terms-of-service",
  },
  {
    title: "Politíca",
    path: "/privacy-policy",
  },
  {
    title: "Blog",
    path: "/blog/blog",
  },
  {
    title: "Contacto",
    path: "/contact",
  },
];

export const parseImagesUrls = (url) => {
  let finalUrl = url;
  if (url.startsWith("http")) {
    finalUrl = url;
  } else {
    finalUrl = `${baseApiUrl}${url}`;
  }
  return finalUrl;
};
