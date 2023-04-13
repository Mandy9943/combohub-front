const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.combohub.website"
    : "http://localhost:1337";

export default baseApiUrl;
