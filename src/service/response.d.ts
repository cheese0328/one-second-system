import { type } from "os";

namespace Res {
  type VerifyCode = {
    code: number;
    msg: string;
    data: { svg: string; no: string };
  };

  type AdminLogin = {
    code: number;
    msg: null | string;
    data?: null | object;
  };

  type AdminAgentList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: {
        agentNo: string;
        agentAccount: string;
        mobileNumber: string;
        realName: string;
        status: number;
        createTime: string;
        updateTime: string;
        defaultPwd: string;
        updatedBy: string;
      }[];
    };
  };

  // 订单管理
  type DataType = {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    orderNo: string;
    avatarUrl: string;
  };

  // 用户管理;

  type OrderList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data;
    };
  };

  type CancelsetData = {
    code: number;
    msg: string;
    data: {
      userCancelTips: [string, string, object];
      adminCancelTips: string[];
      agentCancelTips: string[];
      riderCancelTips: string[];
      userCancelRules: { price: number; timeRange: number[] }[];
      riderCancelRules: { price: number; timeRange: number[] }[];
    };
  };

  type FeesetData = {
    code: number;
    msg: string;
    data: { feeTips: number[]; agentExtract: number; platformExtract: number };
  };

  type getOrderListData = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: undefined[];
    };
  };
}
