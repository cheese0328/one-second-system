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
}
