namespace Req {
  type AdminLogin = {
    adminName: string;
    adminPwd: string;
    no: string;
    verifyCode: string;
  };

  type AdminAgentList = {
    current: number;
    pageSize: number;
  };

  type data = {
    data: {
      id: number;
      createTime: string;
      updateTime: string;
      orderNo: string;
      payAmount: number;
      payType: object;
      serviceType: string;
      timePrice: number;
      distancePrice: number;
      weightPrice: number;
      startPrice: number;
      distance: number;
      weight: number;
      userCouponId: object;
      couponDiscount: number;
      discountPrice: number;
      status: number;
      startAddress: {
        city: string;
        district: string;
        latitude: string;
        province: string;
        longitude: string;
        contactName: string;
        mobileNumber: string;
        streetNumber: string;
        addressDetail: string;
      };
      endAddress: {
        city: string;
        district: string;
        latitude: string;
        province: string;
        longitude: string;
        contactName: string;
        mobileNumber: string;
        addressDetail: string;
      };
      goodsDesc: string;
      userNo: string;
      refundAmount: number;
      refundStatus: number;
      cancelReason: object;
      cancelBy: object;
      cancelByNo: object;
      refundNo: object;
      payTime: object;
      sendTime: object;
      getTime: object;
      successTime: object;
      closeTime: string;
      cancelTime: object;
      refundTime: object;
      riderNo: object;
      city: string;
      completeBy: object;
      completeByNo: object;
      fee: number;
      intergal: number;
      intergalDiscount: number;
      nickName: string;
      mobileNumber: string;
      avatarUrl: string;
    }[];
  };

  type OrderList = {
    pageSize: number;
    current: number;
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
    current?: number;
    mobileNumber?: number;
    orderNo?: number;
    pageSize?: number;
    riderNo?: number;
    status?: number;
    userNo?: number;
  };

  type RiderStatus = {
    userNo: string;
    status: string;
  };

  type CityStatus = {
    cityNo: string;
    status: string;
  };

  type RiderPass = {
    userNo: string;
  };

  type RiderRefuse = {
    userNo: string;
    refuseReason: string;
  };

  type AdminLogin = {
    adminName: string;
    adminPwd: string;
    no: string;
    verifyCode: string;
  };

  type AdminAgentList = {
    current: number;
    pageSize: number;
  };

  type AdminCouponList = {
    // couponName: string;
    current: number;
    pageSize: number;
  };

  type AdminAddCoupons = {
    conditionService: string;
    conditionsAmount: number;
    couponName: string;
    deadlineDays: number;
    discountAmount: number;
    limitNumber: number;
    status: number;
  };

  type AdminUpdatestatus = {
    couponNo: string;
    status: string;
  };

  type ConfigCoupon = {
    shareOpen: boolean;
    newUserOpen: boolean;
    newUserRules: { couponNo: string; probability: number }[];
    shareUserRules: { couponNo: string; probability: number }[];
  };

  type getCapitaltrendData = {
    current: number;
    pageSize: number;
  };

  type postconfigcash = {
    shareOpen: boolean;
    newUserOpen: boolean;
    newUserRules: { couponNo: string; probability: number }[];
    shareUserRules: { couponNo: string; probability: number }[];
  };

  type postconfigAPP1 = {
    wxAppId: string;
    wxAppSecret: string;
    qqAppid: string;
    qqAppSecret: string;
    ttAppid: string;
    ttAppSecret: string;
  };

  type postconfigAPP2 = {
    wxMchId: string;
    notifyUrl: string;
    wxMchSecert: string;
  };

  type postconfigAPP3 = { mapKey: string };

  type postconfigAPP4 = {
    accessKeyId: string;
    accessKeySecret: string;
    arn: string;
    ossRegion: string;
    ossBucket: string;
    smsSignName: string;
    smsTemplateCode: string;
  };

  type postconfigAPP5 = {
    corpid: string;
    corpsecret: string;
    verifyChatid: string;
  };

  type postconfigintegral = { withIntegral: string | number };

  type postconfigshare = { desc: string; path: string; title: string };

  type AdminCityValuation = {
    current: number;
    pageSize: number;
  };

  type AdminCityWeight = {
    current: number;
    pageSize: number;
  };

  type AdminCityTag = {
    current: number;
    pageSize: number;
  };

  type AdminAddValuation = {
    ruleName: string;
    ruleContext: {
      distance: {
        gt: number;
        lte: number;
        unitDistance: number;
        price: number;
      }[];
      weight: { gt: number; lte: number; unitWeight: number; price: number }[];
      time: undefined[];
    };
  };

  type AdmiupdateCoupons = {
    couponName: string;
    deadlineDays: number;
    discountAmount: number;
    conditionsAmount: number;
    conditionService: string;
    limitNumber: number;
    status: number;
    couponNo: string;
  };

  type AdminAgent = {
    current: number;
    pageSize: number;
  };
}
