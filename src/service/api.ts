import request from "@/utils/request";

export const getVerifyCode = async () =>
  await request.get<Res.VerifyCode>("/api/admin/verifycode");

export const postAdminLogin = async (data: Req.AdminLogin) =>
  await request.post("/api/admin/login", data);

export const getAdminAgent = async (params: Req.AdminAgentList) =>
  await request.get<Res.AdminAgentList>("/api/admin/agent/list", { params });
