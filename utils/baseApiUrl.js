const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.combohub.website"
    : "https://api.combohub.website";

export default baseApiUrl;
