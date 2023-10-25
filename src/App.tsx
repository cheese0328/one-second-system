import { type FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";

import Layout from "./layout/Layout";

import Login from "./views/Login/login";
import Index from "./views/index";
import Citys from "./views/city/citys";
import Tag from "./views/city/tag/tag";
import Valuations from "./views/city/valuation/valuations";
import Weight from "./views/city/weight/weight";
import Apps from "./views/config/app";
import Cash from "./views/config/cash";
import Integral from "./views/config/integral";
import Rider from "./views/config/rider";
import Share from "./views/config/share";
import User from "./views/config/user";
import Wxsubscribe from "./views/config/wxsubscribe";
import Coupons from "./views/coupon/coupons";
import Setting from "./views/coupon/setting";
import Cancelset from "./views/order/cancelset";
import Capitaltrend from "./views/order/capitaltrend";
import Feeset from "./views/order/feeset";
import Orders from "./views/order/orders";
import RiderCash from "./views/rider/cash";
import Registers from "./views/rider/registers";
import Riders from "./views/rider/riders";
import Agents from "./views/user/agent/agents";
import Admins from "./views/user/admins";
import Users from "./views/user/users";
import AgreementRider from "./views/config/agreementRider";

const App: FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: "#955ce6" // 修改主题颜色
        }
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/user/agent/agents" element={<Agents />} />
            <Route path="/user/admins" element={<Admins />} />
            <Route path="/user/users" element={<Users />} />
            <Route path="/order/orders" element={<Orders />} />
            <Route path="/order/capitaltrend" element={<Capitaltrend />} />
            <Route path="/order/cancelset" element={<Cancelset />} />
            <Route path="/order/feeset" element={<Feeset />} />
            <Route path="/rider/riders" element={<Riders />} />
            <Route path="/rider/registers" element={<Registers />} />
            <Route path="/rider/cash" element={<RiderCash />} />
            <Route path="/city/citys" element={<Citys />} />
            <Route path="/city/valuation/valuations" element={<Valuations />} />
            <Route path="/city/weight/weight" element={<Weight />} />
            <Route path="/city/tag/tag" element={<Tag />} />
            <Route path="/coupon/coupons" element={<Coupons />} />
            <Route path="/coupon/setting" element={<Setting />} />
            <Route path="/config/cash" element={<Cash />} />
            <Route path="/config/app" element={<Apps />} />
            <Route path="/config/share" element={<Share />} />
            <Route path="/config/integral" element={<Integral />} />
            <Route path="/config/wxsubscribe" element={<Wxsubscribe />} />
            <Route path="/config/user" element={<User />} />
            <Route path="/config/rider" element={<Rider />} />
            <Route path="/config/agreementRider" element={<AgreementRider />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;
