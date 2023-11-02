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

// 资金去向
// http://192.168.145.28:8888/admin/order/capitaltrend/list?current=1&pageSize=20
export const getCapitaltrendData = async (params: Req.getCapitaltrendData) =>
  await request.get<Res.getCapitaltrendData>(
    "/api/admin/order/capitaltrend/list",
    { params }
  );

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

/// 修改状态
export const putCouponsState = async (params: Req.AdminUpdatestatus) =>
  await request.put("/api/admin/coupon/status", params);
// 修改优惠券消息
export const putupdateCoupons = async (params: Req.AdmiupdateCoupons) =>
  await request.put("/api/admin/coupon/update", params);
// 跳转管理员
export const adminInfo = async () =>
  await request.get<Res.AdminInfo>("/api/admin/info");

// 优惠券设置
export const configCoupon = async () =>
  await request.get<Res.Coupon>("/api/admin/config/coupon");

export const postConfigCoupon = async (data: Req.ConfigCoupon) =>
  await request.post("/api/admin/config/coupon", data);

// 提现管理 获取数据
export const configcash = async () =>
  await request.get<Res.configcash>("/api/admin/config/coupon");

// 提现管理 修改数组并上传
export const postconfigcash = async (data: Req.postconfigcash) =>
  await request.post("/api/admin/config/coupon", data);

// 小程序设置
export const configAPP1 = async () =>
  await request.get<Res.configAPP1>("/api/admin/config/appauth");

export const postconfigAPP1 = async (data: Req.postconfigAPP1) =>
  await request.post("/api/admin/config/appauth", data);

// 支付设置
export const configAPP2 = async () =>
  await request.get<Res.configAPP2>("/api/admin/config/appmch");

export const postconfigAPP2 = async (data: Req.postconfigAPP2) =>
  await request.post("/api/admin/config/appmch", data);

// 地图设置
export const configAPP3 = async () =>
  await request.get<Res.configAPP3>("/api/admin/config/map");

export const postconfigAPP3 = async (data: Req.postconfigAPP3) =>
  await request.post("/api/admin/config/map", data);

// 阿里云配置
export const configAPP4 = async () =>
  await request.get<Res.configAPP4>("/api/admin/config/ali");

export const postconfigAPP4 = async (data: Req.postconfigAPP4) =>
  await request.post("/api/admin/config/ali", data);

// 企业微信配置
export const configAPP5 = async () =>
  await request.get<Res.configAPP5>("/api/admin/config/corwx");

export const postconfigAPP5 = async (data: Req.postconfigAPP5) =>
  await request.post("/api/admin/config/corwx", data);

// 分享设置
export const configshare = async () =>
  await request.get<Res.configshare>("/api/admin/config/share");

export const postconfigintegral = async (data: Req.postconfigintegral) =>
  await request.post("/api/admin/config/integra", data);

// 积分设置
export const configintegral = async () =>
  await request.get<Res.configintegral>("/api/admin/config/integral");

export const postconfigshare = async (data: Req.postconfigshare) =>
  await request.post("/api/admin/config/share", data);

export const getAdminCity = async (params: Req.AdminCityValuation) =>
  await request.get<Res.AdminCityValuation>("/api/admin/citys/valuation/list", {
    params: {
      current: 1,
      pageSize: 20
    }
  });

export const getWeight = async (params: Req.AdminCityWeight) =>
  await request.get<Res.AdminCityWeight>("/api/admin/citys/weight/list", {
    params: {
      current: 1,
      pageSize: 20
    }
  });

export const getTag = async (params: Req.AdminCityTag) =>
  await request.get<Res.AdminCityTag>("/api/admin/citys/tag/list", {
    params: {
      current: 1,
      pageSize: 20
    }
  });

export const postValuation = async (data: Req.AdminAddValuation) =>
  await request.post("/api/admin/citys/valuation/add", data);
