import Network from "./network";
export const login = (data) => Network.post("/student/login", data);
//hhk: 发请求先写这里(写给自己看的......)
export const insertChoiceQuestion = (data) =>
  Network.post("/test/insertChoiceQuestion", data);
export const insertJudgeQuestion = (data) =>
  Network.post("/judgeTest/insert", data);
export const getAllTest = (data) => Network.get("/alltest/get", data);
export const deleteQuestion = (queid) =>
  Network.delete(`/alltest/delete/${queid}`);
export const studentAnswer = (data) =>
  Network.post("/test/studentAnswer", data);

export const studentAnswerJudge = (data) =>
  Network.post("/judgeTest/studentAnswerJudge", data);

// function register(data){
//  return  Network.post("/user/register", data);
// }
