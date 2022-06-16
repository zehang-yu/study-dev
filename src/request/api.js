import Network from "./network";
export const register = (data) => Network.post("/user/register", data);
