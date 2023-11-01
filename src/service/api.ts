import request from "@/utils/request";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports

export const getVerifyCode = async () =>
  await request.get<Res.VerifyCode>("/api/admin/verifycode");

export const postAdminLogin = async (data: Req.AdminLogin) =>
  await request.post("/api/admin/login", data);

export const getAdminAgent = async (params: Req.AdminAgentList) =>
  await request.get<Res.AdminAgentList>("/api/admin/agent/list", { params });

// 订单管理
export const getOrderList = async (params: Req.OrderList) =>
  await request.get<Res.OrderList>("/api/admin/order/list/", { params });
// 取消订单
export const getCancelsetData = async () =>
  await request.get<Res.CancelsetData>("/api/admin/config/ordercancel");
// 小费配置
export const getFeesetData = async () =>
  await request.get<Res.FeesetData>("/api/admin/config/orderfee");

// 查找
export const getOrderListData = async (data: Req.getOrderListData) =>
  await request.get<Res.getOrderListData>("/api/admin/order/list/", { data });

// 提交保存取消订单配置

export const getOrdercancelData = async (data: Req.CancelsetData) =>
  await request.post("/api/admin/config/ordercancel", data);

// 提交小费配置
export const getOrderfeelData = async (data: Req.FeesetData) =>
  await request.post("/api/admin/config/orderfee", data);

// 获取骑手列表
export const getAdminRiderList = async (params: Req.AdminAgentList) =>
  await request.get<Res.AdminRiderList>("/api/admin/rider/list", { params });

// 骑手列表启用禁用状态管理
export const putStatus = async (params: Req.RiderStatus) =>
  await request.put("/api/admin/user/status", params);

// 获取骑手审核列表
export const getAdminRiderRegisterList = async (params: Req.AdminAgentList) =>
  await request.get<Res.AdminRiderRegisterList>(
    "/api/admin/rider/register/list",
    {
      params
    }
  );

// 审核通过状态管理
export const putAdminRiderPass = async (params: Req.RiderPass) =>
  await request.put("/api/admin/rider/pass", params);

// 拒绝审核状态管理
export const putAdminRiderRefuse = async (params: Req.RiderRefuse) =>
  await request.put("/api/admin/rider/refuse", params);

// 获取运营城市列表
export const getAdminCitysList = async (params: Req.AdminAgentList) =>
  await request.get<Res.AdminCitysList>("/api/admin/citys/list", { params });

// 城市列表启用禁用状态管理
export const putCityStatus = async (params: Req.CityStatus) =>
  await request.put("/api/admin/citys/status", params);

export const getadminCouponList = async (params: Req.AdminCouponList) =>
  await request.get("/api/admin/coupon/list?current=1&pageSize=200", {
    params
  });

export const adminCoupon = async (params?: Req.AdminCouponList) =>
  await request.get("/api/admin/coupon/list?current=1&pageSize=200", {
    params
  });

// 添加优惠券
export const postadminAddCoupons = async (data: Req.AdminAddCoupons) =>
  await request.post("/api/admin/coupon/add", data);

// 修改状态
export const postadimUpdateState = async (data: Req.AdminUpdatestatus) =>
  await request.post<Res.AdminUpdatestatus>("/api/admin/coupon/status", data);

// 优惠券设置
export const configCoupon = async () =>
  await request.get<Res.Coupon>("/api/admin/config/coupon");

export const postConfigCoupon = async (data: Req.ConfigCoupon) =>
  await request.post("/api/admin/config/coupon", data);
