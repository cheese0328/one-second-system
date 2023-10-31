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

  type AdminRiderList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: {
        id: number;
        createTime: string;
        updateTime: string;
        riderNo: string;
        status: number;
        userNo: string;
        startReceive: number;
        cityNo: string;
        realname: string;
        mobileNumber: string;
        avatarUrl: string;
        nickName: string;
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

  type getOrderListData = {
    data: {
      id: number;
      createTime: string;
      updateTime: string;
      riderNo: string;
      status: number;
      userNo: string;
      startReceive: number;
      cityNo: string;
      realname: string;
      mobileNumber: string;
      avatarUrl: string;
      nickName: string;
    }[];
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

  type AdminRiderRegisterList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: undefined[];
      data: [
        {
          id: number;
          createTime: string;
          updateTime: string;
          realname: string;
          idCardNo: string;
          avatarFaceImage: string;
          nationalFaceImage: string;
          status: number;
          refuseReason: object;
          userNo: string;
          cityNo: string;
          refuseReason: string;
        }
      ];
    };
  };

  type AdminCitysList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: [
        {
          id: number;
          createTime: string;
          updateTime: string;
          cityNo: string;
          cityName: string;
          province: string;
          agentNo: string;
          startPrice: number;
          extractHelpDeliver: number;
          extractHelpGet: number;
          extractHelpBuy: number;
          extractHelpDeliverForAgent: number;
          extractHelpGetForAgent: number;
          extractHelpBuyForAgent: number;
          citysValuationId: number;
          citysWeightTagId: number;
          citysTagGroupId: number;
          status: number;
          corwxChatid: object;
          updatedBy: string;
        }
      ];
    };
  };
}
