import { type FC } from "react";
import { useRequest } from "ahooks";
// import type { MenuProps } from "antd";
import { Input, Select, Space, Button, Table, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Icon } from "@iconify/react";
import { getAdminsList } from "../../service/api";

// 时间转换函数
function time(time: any) {
  const dateObj = new Date(time);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  const hours = String(dateObj.getUTCHours() + 8).padStart(2, "0"); // Adding 8 hours for the timezone
  const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
  const TimeData = `${year}/${month}/${day} ${hours}:${minutes}`;
  return TimeData;
}

// 组件表格类型
interface DataType {
  adminNo: string;
  adminName: string;
  mobileNumber: string;
  realName: string;
  status: number;
  createTime: string;
  updateTime: string;
  defaultPwd: string;
  updatedBy: string;
}

// 组件内容
const columns: ColumnsType<DataType> = [
  {
    title: "编号",
    dataIndex: "adminNo"
  },
  {
    title: "账号",
    dataIndex: "adminName",
    render: (record: DataType) => `${record.adminName}`
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
    dataIndex: "createTime",
    render: (text: string, record: DataType) => (
      <div>
        创建:{time(record.createTime)}
        <br />
        更新:{time(record.updateTime)}
      </div>
    )
  },
  {
    title: "操作",
    dataIndex: "operate",
    render: (record: DataType) => (
      <>
        <div className="flex items-center">
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: <Button type="text">启用</Button>
                },
                {
                  key: "2",
                  label: <Button type="text">禁用</Button>
                }
              ]
            }}
            placement="bottomLeft"
          >
            <Button className="border-[#955ce6] h-[24px] px-[7px] py-0 ml-[2px]">
              <Icon
                icon="ri:more-fill"
                color="#955ce6"
                className="text-[16px]"
              />
            </Button>
          </Dropdown>
        </div>
      </>
    )
  }
];

// 组件原数据类型
// const originaldata: DataType[] = [];

const Admins: FC = () => {
  // 选择器
  const handleChange = (value: string) => {};
  // 请求数据
  const { data } = useRequest(
    async () => await getAdminsList({ current: 1, pageSize: 200 })
  );

  // 以下都是表格
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {};
  const rowSelection = {
    onChange: onSelectChange
  };

  return (
    <>
      <div style={{ fontSize: "24px", fontWeight: "500" }}>管理员代表</div>
      {/* 搜索栏 */}
      <div
        className="mt-[20px]"
        style={{ borderBottom: "1px solid #E8E8E8", paddingBottom: "20px" }}
      >
        {/* 搜索框 */}
        <div className="flex flex-wrap flex-start">
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="管理员编号" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="账号" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="手机号" className=" w-[200px] h-[40px]" />
          </div>
          <div className=" w-[200px] mr-[8px] mb-[8px]">
            <Input placeholder="昵称" className=" w-[200px] h-[40px]" />
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
          添加管理员
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
          dataSource={data?.data.data.data}
        />
      </div>
    </>
  );
};

export default Admins;
