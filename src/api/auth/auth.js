import request from "@/utils/request";
// 注册
export function userRegister(userDTO) {
  return request({
    url: "/ums/user/register",
    method: "post",
    data: userDTO,
  });
}
