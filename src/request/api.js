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

let uid = JSON.parse(localStorage.getItem("userInfo")).userId;
export const queryPoint = (data) =>
  Network.get("/allInfo/getInfo/" + uid, data);
export const updateHelper = (data) => Network.put("/allInfo/getInfo", data);

//let id=JSON.parse(localStorage.getItem("userInfo")).account;
//传输参数更改
export const studentCuoTiList = (data) =>
  Network.get("teachermanage/getStudentCuoTi/" + "1", data);
// function register(data){
//  return  Network.post("/user/register", data);
// }
