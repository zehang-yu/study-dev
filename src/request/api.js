import Network from "./network";
export const register = (data) => Network.post("/user/register", data);
//发请求先写这里
// export const insertChoiceQuestion = (data) =>
//   Network.post("/test/insertChoiceQuestion", data);

// function register(data){
//  return  Network.post("/user/register", data);
// }
