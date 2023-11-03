import { useState, type FC, useEffect } from "react";
import { useRequest } from "ahooks";
import { Input, Select, Space, Button, Table, Form, Tag, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Icon } from "@iconify/react";
import { getUserList } from "../../service/api";

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

// 列表类型
interface DataType {
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

const columns: ColumnsType<DataType> = [
  {
    title: "编号",
    dataIndex: "userNo"
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
    render: (text: string, record: DataType) => {
      return (
        <img
          src={record.avatarUrl}
          alt=""
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      );
    }
  },
  {
    title: "昵称",
    dataIndex: "nickName"
  },
  {
    title: "手机号",
    dataIndex: "mobileNumber"
  },
  {
    title: "地区",
    dataIndex: "area"
  },
  {
    title: "状态",
    dataIndex: "status",
    render: (status: number) => (
      <>
        {status === 1 ? (
          <Tag className="green">启用</Tag>
        ) : (
          <Tag className="red">禁用</Tag>
        )}
      </>
    )
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

const Agents: FC = () => {
  // const { Option } = Select;

  // 保存搜索数据
  const [seek, setSeek] = useState({});
  // 点击搜索后刷新
  useEffect(() => {
    refresh();
  }, [seek]);
  const onFinish = (values: number | string) => {
    setSeek(values);
    refresh();
  };

  // 请求用户数据
  const { data, refresh } = useRequest(
    async () => await getUserList({ current: 1, pageSize: 200, ...seek })
  );

  const [form] = Form.useForm();
  // 取消
  const handleClear = () => {
    form.resetFields();
    setSeek(() => {});
  };

  // // 操作的选择器
  const handleChange = (value: string) => {};

  // 以下是表格
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {};
  const rowSelection = {
    onChange: onSelectChange
  };

  return (
    <>
      <div style={{ fontSize: "24px", fontWeight: "500" }}>用户列表</div>
      {/* 搜索栏 */}
      <div
        className="mt-[20px]"
        style={{ borderBottom: "1px solid #E8E8E8", paddingBottom: "20px" }}
      >
        {/* 搜索框 */}
        <Form onFinish={onFinish} form={form}>
          <div className="flex flex-wrap flex-start">
            <div className=" w-[200px] mr-[8px] mb-[8px]">
              <Form.Item name="userNo">
                <Input placeholder="用户编号" className=" w-[200px] h-[40px]" />
              </Form.Item>
            </div>
            <div className=" w-[200px] mr-[8px] mb-[8px]">
              <Form.Item name="nickName">
                <Input placeholder="昵称" className=" w-[200px] h-[40px]" />
              </Form.Item>
            </div>
            <div className=" w-[200px] mr-[8px] mb-[8px]">
              <Form.Item name="mobileNumber">
                <Input placeholder="手机号" className=" w-[200px] h-[40px]" />
              </Form.Item>
            </div>
            <div className=" w-[200px] mr-[8px] mb-[8px]">
              <Form.Item name="status">
                <Space wrap>
                  <Select
                    defaultValue="状态：禁用"
                    style={{ width: 200, height: 40 }}
                    onChange={handleChange}
                    options={[
                      { label: "状态：全部" },
                      { value: "1", label: "状态：启用" },
                      { value: "0", label: "状态：禁用" }
                    ]}
                  />
                </Space>
              </Form.Item>
            </div>
          </div>
          {/* 按钮 */}
          <div className=" mt-[12px]">
            <Button className=" w-[120px] h-[38px]" onClick={handleClear}>
              取消
            </Button>

            <Button
              htmlType="submit"
              type="primary"
              className=" w-[120px] h-[38px] ml-[5px]"
            >
              搜索
            </Button>
          </div>
        </Form>
      </div>

      {/* 添加刷新 */}
      <div className="flex justify-between items-center h-[90px]">
        <div></div>
        <Button
          icon={
            <Icon
              icon="formkit:refresh"
              height="20px"
              style={{ paddingTop: "5px" }}
            />
          }
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
          pagination={{
            defaultPageSize: 20,
            showTotal: (table) => `共${table}条数据`
          }}
        />
      </div>
    </>
  );
};

export default Agents;
