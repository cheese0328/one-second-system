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
  // 骑手列表
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
  // 骑手审核列表
  type AdminRiderRegisterList = {
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
  // 运营城市列表
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
  type AdminCoupon = {
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
        couponNo: string;
        couponName: string;
        deadlineDays: number;
        discountAmount: number;
        conditionsAmount: number;
        conditionService: string;
        cumulativeDrawNo: number;
        cumulativeUseNo: number;
        limitNumber: number;
        status: number;
        updatedBy: string;
      }[];
    };
  };
  type AdminUpdatestatus = {
    code: number;
    msg: string;
  };
  type Coupon = {
    code: number;
    msg: string;
    data: {
      shareOpen: boolean;
      newUserOpen: boolean;
      newUserRules: { couponNo: string; probability: number }[];
      shareUserRules: { couponNo: string; probability: number }[];
    };
  };
  type CouponList = {
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
        couponNo: string;
        couponName: string;
        deadlineDays: number;
        discountAmount: number;
        conditionsAmount: number;
        conditionService: string;
        cumulativeDrawNo: number;
        cumulativeUseNo: number;
        limitNumber: number;
        status: number;
        updatedBy: string;
      }[];
    };
  };
  type getCapitaltrendData = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: string[];
    };
  };
  type configcash = {
    code: number;
    msg: string;
    data: {
      shareOpen: boolean;
      newUserOpen: boolean;
      newUserRules: { couponNo: string; probability: number }[];
      shareUserRules: { couponNo: string; probability: number }[];
    };
  };
  type configAPP1 = {
    code: number;
    msg: string;
    data: {
      qqAppid: string;
      ttAppid: string;
      wxAppId: string;
      qqAppSecret: string;
      ttAppSecret: string;
      wxAppSecret: string;
    };
  };
  type configAPP2 = {
    code: number;
    msg: string;
    data: { wxMchId: string; notifyUrl: string; wxMchSecert: string };
  };
  type configAPP3 = { code: number; msg: string; data: { mapKey: string } };
  type configAPP4 = {
    code: number;
    msg: string;
    data: {
      arn: string;
      ossBucket: string;
      ossRegion: string;
      accessKeyId: string;
      smsSignName: string;
      accessKeySecret: string;
      smsTemplateCode: string;
    };
  };
  type configAPP5 = {
    code: number;
    msg: string;
    data: { corpid: string; corpsecret: string; verifyChatid: string };
  };
  type configshare = {
    code: number;
    msg: string;
    data: { desc: string; path: string; title: string };
  };
  type configintegral = {
    code: number;
    msg: string;
    data: { withIntegral: number };
  };
  type AdminCityValuation = {
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
          isDelete: number;
          ruleName: string;
          ruleContext: {
            time: undefined[];
            weight: {
              gt: number;
              lte: number;
              price: number;
              unitWeight: number;
            }[];
            distance: {
              gt: number;
              lte: number;
              price: number;
              unitDistance: number;
            }[];
          };
          createdBy: string;
          updatedBy: string;
        },
        {
          id: number;
          createTime: string;
          updateTime: string;
          isDelete: number;
          ruleName: string;
          ruleContext: {
            time: { gt: number; lte: number; price: number }[];
            weight: {
              gt: number;
              lte: number;
              price: number;
              unitWeight: number;
            }[];
            distance: {
              gt: number;
              lte: number;
              price: number;
              unitDistance: number;
            }[];
          };
          createdBy: string;
          updatedBy: string;
        }
      ];
    };
  };
  type AdminCityWeight = {
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
        isDelete: number;
        tagName: string;
        tags: { type: string; label: string; value: number[] }[];
        createdBy: string;
        updatedBy: string;
      }[];
    };
  };
  type AdminCityTag = {
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
          isDelete: number;
          groupName: string;
          tags: string[];
          createdBy: string;
          updatedBy: string;
        }
      ];
    };
  };
  type AdminInfo = {
    code: number;
    msg: string;
    data: {
      adminNo: string;
      mobileNumber: string;
      adminName: string;
      realName: string;
      avatarUrl: object;
    };
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

  type AgentList = {
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

  // 管理员列表
  type AdminsList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: {
        adminNo: string;
        adminName: string;
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

  // 用户列表
  type UserList = {
    code: number;
    msg: string;
    data: {
      pageSize: number;
      current: number;
      count: number;
      data: [
        {
          id: number;
          createTime: string;
          updateTime: string;
          userNo: string;
          countryCode: string;
          mobileNumber: string;
          avatarUrl: string;
          nickName: string;
          gender: number;
          province: object;
          city: object;
          area: string;
          status: number;
          homeAddressNo: object;
          companyAddressNo: object;
        }
      ];
    };
  };
  type GobalList = {
    code: number;
    msg: string;
    data: {
      userTotal: number;
      orderCompleteTotal: number;
      tradeTotal: number;
      incomeTotal: number;
      yesterdayUserTotal: string;
      yesterdayOrderCompleteTotal: string;
      yesterdayTradeTotal: number;
      yesterdayIncomeTotal: number;
    };
  };
}
