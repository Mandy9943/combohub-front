const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://combohub.website"
    : "http://localhost:3000";

export default baseUrl;
