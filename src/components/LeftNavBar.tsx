import { Icon } from "@iconify/react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";

// 主题样式
const Wrapper = styled.div`
  .ant-menu-item::after {
    transform: scaleY(1);
    transition:
      transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
      opacity 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-color: #955ce6;
    display: block;
    width: 3px;
    height: 40px;
    bottom: 0;
    content: "";
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
  }
  .ant-menu-item {
    border-radius: inherit !important;
    margin: 0 -1px;
    width: 100%;
  }
  /* 边框阴影 */
  .containerShadow {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  }
`;

// 侧边栏组件
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  const x: MenuItem = {
    key,
    icon,
    children,
    label,
    type
  };
  return x;
}

const items: MenuItem[] = [
  getItem("数据总览", "0", <Icon icon="vaadin:dashboard" />),
  getItem("用户管理", "sub2", <Icon icon="fa:id-card" />, [
    getItem("代理列表", "1"),
    getItem("管理员列表", "2"),
    getItem("用户列表", "3")
  ]),
  getItem("订单管理", "sub3", <Icon icon="mingcute:drawer-fill" />, [
    getItem("订单列表", "4"),
    getItem("资金走向列表", "5"),
    getItem("取消订单配置", "6"),
    getItem("小费选项配置", "7")
  ]),
  getItem("骑手管理", "sub4", <Icon icon="mdi:truck" />, [
    getItem("骑手列表", "8"),
    getItem("骑手审核列表", "9")
  ]),
  getItem("城市管理", "sub5", <Icon icon="solar:city-bold" />, [
    getItem("运营城市列表", "10")
  ]),
  getItem("运营管理", "sub6", <Icon icon="material-symbols:folder-managed" />, [
    getItem("计价规则", "11"),
    getItem("重量标签", "12"),
    getItem("物品标签组", "13")
  ]),
  getItem("优惠券管理", "sub7", <Icon icon="icon-park-solid:coupon" />, [
    getItem("优惠券列表", "14"),
    getItem("优惠券设置", "15")
  ]),
  getItem("提现管理", "sub8", <Icon icon="jam:pictures-f" />, [
    getItem("提现列表", "16"),
    getItem("提现设置", "17")
  ]),
  getItem("系统设置", "sub9", <Icon icon="ic:sharp-settings" />, [
    getItem("小程序设置", "18"),
    getItem("分享设置", "19"),
    getItem("积分设置", "20"),
    getItem("订阅消息设置", "21"),
    getItem("用户指南", "22"),
    getItem("骑手指南", "23"),
    getItem("骑手协议", "24")
  ])
];

export default function LeftNavBar() {
  // 点击切换路由
  const navigate = useNavigate();
  const UrlArr = [
    "/",
    "/user/agent/agents",
    "/user/admins",
    "/user/users",
    "/order/orders",
    "/order/capitaltrend",
    "/order/cancelset",
    "/order/feeset",
    "/rider/riders",
    "/rider/registers",
    "/city/citys",
    "/city/valuation/valuations",
    "/city/weight/weight",
    "/city/tag/tag",
    "/coupon/coupons",
    "/coupon/setting",
    "/rider/cash",
    "/config/cash",
    "/config/app",
    "/config/share",
    "/config/integral",
    "/config/wxsubscribe",
    "/config/user",
    "/config/rider",
    "/config/agreementRider"
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onClick(e: any) {
    navigate(UrlArr[e.key]);
  }

  // 侧边栏组件
  // const location = useLocation();
  let keys: any;
  let subs;
  const subsMap = [
    { range: [1, 4], subs: "sub2" },
    { range: [4, 8], subs: "sub3" },
    { range: [8, 10], subs: "sub4" },
    { range: [10, 11], subs: "sub5" },
    { range: [11, 14], subs: "sub6" },
    { range: [14, 16], subs: "sub7" },
    { range: [16, 18], subs: "sub8" },
    { range: [18, 24], subs: "sub9" }
  ];

  // keys = UrlArr.indexOf(location.pathname);

  for (const item of subsMap) {
    const [start, end] = item.range;
    if (keys >= start && keys < end) {
      subs = item.subs;
      break;
    }
  }

  return (
    <Wrapper
      className="pt-[12px] rounded-[4px] overflow-hidden w-[200px] bg-[#fff]"
      style={{
        height: "calc(100vh - 100px)"
      }}
    >
      <Scrollbars
        autoHide
        style={{ width: "100%", height: "100%" }}
        renderTrackVertical={() => <div className="custom-track-vertical" />}
        renderThumbVertical={() => (
          <div style={{ height: "100px" }} className="custom-thumb-vertical" />
        )}
      >
        <Menu
          mode="inline"
          style={{ width: 200 }}
          items={items}
          onClick={onClick}
          defaultSelectedKeys={[`${keys}`]}
          defaultOpenKeys={[`${subs}`]}
        />
      </Scrollbars>
    </Wrapper>
  );
}
