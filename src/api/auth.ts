import request from '@/utils/http'

/**
 * 登录
 * @param params 登录参数
 * @returns 登录响应
 */
export function fetchLogin(params: Api.Auth.LoginParams) {
  console.log("登录结果参数",params)
  var item = request.post<Api.Auth.LoginResponse>({
   // url: '/api/Login/GetToken',
    url: '/api/auth/login',
    params: params
    // showSuccessMessage: true // 显示成功消息
    // showErrorMessage: false // 不显示错误消息
  });
    
    console.log("登录结果",item)
  return item;
}

/**
 * 获取销售额
 * @param params 登录参数
 * @returns 登录响应
 */
export function GetSalesRevenue() {
  return request.get<Api.Auth.LoginResponse>({
    url: '/api/auth/login'
    // showSuccessMessage: true // 显示成功消息
    // showErrorMessage: false // 不显示错误消息
  })
}


/**
 * 获取用户信息
 * @returns 用户信息
 */
export function fetchGetUserInfo() {
  return request.get<Api.Auth.UserInfo>({
   // url: '/api/user/info'
    url: '/api/UserInfo/GetUserInfo'
    // 自定义请求头
    // headers: {
    //   'X-Custom-Header': 'your-custom-value'
    // }
  })
}
