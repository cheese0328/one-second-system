import { type FC } from "react";
// 订阅消息设置
import { Dropdown, Space, Table, Tabs } from "antd";
import type { TabsProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const onChange = (key: string) => {
  // eslint-disable-next-line no-console
  console.log(key);
};

// const zzy = {
//   name: "标题",
//   age: "说明",
//   pg: "事例",
//   six: "操作"
// };

const Children1 = () => {
  return <Table className=" w-[1000px]" />;
};
const Children2 = () => {
  return <Table className=" w-[1000px]" />;
};
const Children3 = () => {
  return (
    <Dropdown arrow={true}>
      <a>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "我的模版",
    children: Children1()
  },
  {
    key: "2",
    label: "公共模版",
    children: Children2()
  },
  {
    key: "3",
    label: "消息设置",
    children: Children3()
  }
];

const Wxsubscribe: FC = () => {
  return (
    <div className=" relative">
      <div className=" w-[75%] absolute top-[10px] left-[20px]">
        <span className=" text-[20px] pr-[12px]">
          <strong>订阅消息设置</strong>
        </span>
      </div>
      <div className=" absolute top-[50px] left-[40px]">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Wxsubscribe;
