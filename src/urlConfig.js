const baseUrl = "http://localhost:2200";
// const baseUrl = "https://viplus-backend.herokuapp.com";

export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
