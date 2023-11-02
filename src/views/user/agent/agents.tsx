import { type FC } from "react";
import { useRequest } from "ahooks";
// import type { MenuProps } from "antd";
import { Input, Select, Space, Button, Table, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Icon } from "@iconify/react";
import { getAgentList } from "../../../service/api";

// 列表类型
interface DataType {
  key: React.Key;
  agentNo: string;
  agentAccount: any;
  mobileNumber: string;
  realName: string;
  createTime: string;
  updateTime: string;
  status: React.ReactElement;
  defaultPwd: string;
  updatedBy: string;
  operate: React.ReactElement;
}

const columns: ColumnsType<DataType> = [
  {
    title: "编号",
    dataIndex: "agentNo"
  },
  {
    title: "账号",
    dataIndex: "agentAccount"
  },
  {
    title: "手机号",
    dataIndex: "mobileNumber"
  },
  {
    title: "姓名",
    dataIndex: "realName"
  },
  {
    title: "状态",
    dataIndex: "status"
  },
  {
    title: "时间",
    dataIndex: "createTime"
  },
  {
    title: "操作",
    dataIndex: "operate"
  }
];

const yuandata: DataType[] = [];

// 操作按钮

const Agents: FC = () => {
  // 代理列表数据
  // const [agentslist, setagentslist] = useState([]);

  // 请求回来的数据
  const { data } = useRequest(
    async () => await getAgentList({ current: 1, pageSize: 200 })
  );
  data?.data.data.data.forEach((item, index) => {
    yuandata.push({
      agentNo: `${item.agentNo}`,
      key: `${index}`,
      agentAccount: `${item.agentAccount} 初始密码:${item.defaultPwd}`,
      mobileNumber: `${item.mobileNumber}`,
      realName: `${item.realName}`,
      createTime: `创建:${item.createTime.split("T")[0].replace(/-/g, "/")}
      ${item.createTime.split("T")[1].substring(0, 5)}
      更新:${item.updateTime.replace(/-/g, "/").split("T")[0]} ${item.updateTime
        .split("T")[1]
        .substring(0, 5)}`,
      updateTime: "",
      status: (
        <>
          {item.status === 1 ? (
            <button
              style={{
                color: "#52c41a",
                backgroundColor: "#b7eb8f",
                background: "#f6ffed",
                border: "1px solid #B7EB8F"
              }}
            >
              启用
            </button>
          ) : (
            <button
              style={{
                color: "#f5222d",
                backgroundColor: "#ffa39e",
                background: "#fff1f0",
                border: "1px solid #FFA39E"
              }}
            >
              禁用
            </button>
          )}
        </>
      ),
      defaultPwd: "",
      updatedBy: "",
      operate: (
        <>
          <div className="flex items-center">
            <Icon
              icon="mingcute:user-setting-fill"
              color="#955ce6"
              height="20px"
            />
            <Dropdown
              menu={{
                items: [
                  {
                    key: "1",
                    label: "修改",
                    onClick: () => {}
                  },
                  {
                    key: "2",
                    disabled: item.status === 1,
                    label: "启用"
                  },
                  {
                    key: "3",
                    disabled: item.status === 0,
                    label: "禁用"
                  },
                  {
                    key: "4",
                    label: "修改密码"
                  }
                ]
              }}
              placement="bottomLeft"
            >
              <Button
                style={{ border: "1px solid #955ce6", marginLeft: "5px" }}
                icon={
                  <Icon
                    icon="solar:menu-dots-bold"
                    color="#955ce6"
                    fontSize="18px"
                  />
                }
                className=" h-[28px]"
              />
            </Dropdown>
          </div>
        </>
      )
    });
  });

  // 选择器
  const handleChange = (value: string) => {};

  // 以下是表格
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {};
  const rowSelection = {
    onChange: onSelectChange
  };

  return (
    <>
      <div style={{ fontSize: "24px", fontWeight: "500" }}>代理代表</div>
      {/* 搜索栏 */}
      <div
        className="mt-[20px]"
        style={{ borderBottom: "1px solid #E8E8E8", paddingBottom: "20px" }}
      >
        {/* 搜索框 */}
        <div className="flex flex-wrap flex-start">
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="代理编号" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="账号" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="昵称" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="状态" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Space wrap>
              <Select
                defaultValue="状态：禁用"
                style={{ width: 200, height: 40 }}
                onChange={handleChange}
                options={[
                  { value: "状态：全部", label: "状态：全部" },
                  { value: "状态：启用", label: "状态：启用" },
                  { value: "状态：禁用", label: "状态：禁用" }
                ]}
              />
            </Space>
          </div>
        </div>
        {/* 按钮 */}
        <div className=" mt-[12px]">
          <Button className=" w-[120px] h-[38px]">取消</Button>
          <Button type="primary" className=" w-[120px] h-[38px] ml-[5px]">
            搜索
          </Button>
        </div>
      </div>
      {/* 添加刷新 */}
      <div className="flex justify-between items-center h-[90px]">
        <Button type="primary" className=" h-[40px]">
          添加代理
        </Button>
        <Button
          icon={
            <Icon
              icon="formkit:refresh"
              height="20px"
              style={{ paddingTop: "5px" }}
            />
          }
          href="https://www.google.com"
          className=" h-[40px]"
          style={{ width: "40px" }}
        />
      </div>
      {/* 表格 */}
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={yuandata}
        />
      </div>
    </>
  );
};

export default Agents;
