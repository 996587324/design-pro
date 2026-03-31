import request from '@/utils/http'
import { AppRouteRecord } from '@/types/router'

// 获取用户列表
export function fetchGetUserList(params: Api.SystemManage.UserSearchParams) {
    console.log("获取用户列表",params)
  var item = request.get<Api.SystemManage.UserList>({
    url: '/api/user/list',
    //url: 'api/UserInfo/GetUserInfo',
    params
  })
  return item
}

// 获取角色列表
export function fetchGetRoleList(params: Api.SystemManage.RoleSearchParams) {
  console.log("获取角色列表",params)
  return request.get<Api.SystemManage.RoleList>({
   // url: '/api/role/list',
   url: '/api/Role/GetRolePage',
    params
  })
}

// 获取菜单列表
export function fetchGetMenuList() {
  var item = request.get<AppRouteRecord[]>({
   // url: '/api/v3/system/menus/simple'
      url: 'api/Menu/GetMenuTree'
  });
  console.log("获取菜单列表",item)
  return item
}

//新增路由信息
export function fetchSetMenu(params:Api.SystemManage.MenuFormData) {
  console.log("新增路由信息参数",params)
  var item = request.post<AppRouteRecord>({
    url: '/api/Menu/AddMenu',
    params: params
    // showSuccessMessage: true // 显示成功消息
    // showErrorMessage: false // 不显示错误消息
  });
    
    console.log("新增路由信息结果",item)
  return item;
}
