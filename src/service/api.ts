import request from "@/utils/request";
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Res } from "./response";

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
