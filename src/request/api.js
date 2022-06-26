import Network from "./network";
//登录
export const login = (user, type) => Network.post(`/user/login/${type}`, user);
//插入选择题
export const insertChoiceQuestion = (data) =>
  Network.post("/test/insertChoiceQuestion", data);
//插入判断题
export const insertJudgeQuestion = (data) =>
  Network.post("/judgeTest/insert", data);
//获取所有题目
export const getAllTest = (data) => Network.get("/alltest/get", data);
//根据id删除题目
export const deleteQuestion = (queid) =>
  Network.delete(`/alltest/delete/${queid}`);

export const studentAnswer = (data) =>
  Network.post("/test/studentAnswer", data);

export const studentAnswerJudge = (data) =>
  Network.post("/judgeTest/studentAnswerJudge", data);

// function register(data){
//  return  Network.post("/user/register", data);
// }
