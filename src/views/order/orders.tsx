/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { useState, useEffect } from "react";
import { type FC } from "react";
import {
  Input,
  TreeSelect,
  Button,
  Form,
  Table,
  Dropdown,
  Pagination
} from "antd";
import { useForm } from "antd/lib/form/Form";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import { getOrderList } from "@/service/api";

const treeData = [
  { label: "状态：全部", value: "", title: "状态：全部" },
  { label: "取消订单", value: "-2", title: "取消订单" },
  { label: "关闭交易", value: "-1", title: "关闭交易" },
  { label: "待付款", value: "0", title: "待付款" },
  { label: "已接单", value: "1", title: "已接单" },
  { label: "配送中", value: "2", title: "配送中" },
  { label: "待确认完成", value: "3", title: "待确认完成" },
  { label: "订单已完成", value: "4", title: "订单已完成" }
];

// 页面结构
const columns: ColumnsType<data> = [
  {
    title: "编号",
    dataIndex: "orderNo",
    render: (_, { orderNo }) => <div className="w-[150px]">{orderNo}</div>
  },
  {
    title: "下单用户",
    dataIndex: "nickName",
    render: (_, { nickName, avatarUrl, mobileNumber }) => (
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] rounded-[50%]"
          src={avatarUrl}
          alt=""
        />
        <div className="flex flex-col ml-[5px]">
          <div>{nickName}</div>
          <div>{mobileNumber}</div>
        </div>
      </div>
    )
  },
  {
    title: "下单金额",
    dataIndex: "dollor",
    render: (
      _,
      { timePrice, distancePrice, weightPrice, startPrice, payAmount }
    ) => (
      <div className="w-[100px]">
        {timePrice === 0 ? null : <p>起步价：{timePrice}元</p>}
        {distancePrice === 0 ? null : <p>路程价：{distancePrice}元</p>}
        {weightPrice === 0 ? null : <p>重量价：{weightPrice}元</p>}
        {startPrice === 0 ? null : <p>时段价：{startPrice}元</p>}
        <p>
          支付金额：
          {payAmount}元
        </p>
      </div>
    )
  },
  {
    title: "下单信息",
    dataIndex: "Information",
    render: (_, { goodsDesc, endAddress, startAddress }) => (
      <div className="flex w-[100px]  flex-col">
        <span className="text-[14px] text-[#333]">{goodsDesc}</span>
        {startAddress?.city === "" ||
        startAddress?.addressDetail === "" ? null : (
          <p className="text-[14px] text-[#333]">
            起点：
            <span className="text-[12px] text-[#999]">
              {startAddress?.city}
              {startAddress?.addressDetail}
            </span>
          </p>
        )}

        <span>
          {startAddress?.contactName === "" ? null : startAddress?.contactName}
          {startAddress?.mobileNumber === " "
            ? null
            : startAddress?.mobileNumber}
        </span>
        <p className="text-[14px] text-[#333]">
          终点：
          <span className="text-[12px] text-[#999]">
            {endAddress?.addressDetail}
          </span>
        </p>
      </div>
    )
  },
  {
    title: "状态",
    dataIndex: "state",
    render: (_, { status }) => (
      <div className="w-[50px] text-[#fff] text-[12px]">
        <span
          style={{ backgroundColor: `${status === -1 ? "#999" : "#000"}` }}
          className="px-[7px] py-[5px] rounded-[5px]"
        >
          {status === -1 ? "已取消" : "已关闭"}
        </span>
      </div>
    )
  },
  {
    title: "售后",
    dataIndex: "售后",
    render: (_, { refundStatus, refundAmount }) => (
      <div className="flex w-[50px]">
        <span>
          {refundStatus === 0 ? <span>已退款</span> : <span>未退款</span>}
          {refundAmount}元
        </span>
      </div>
    )
  },
  {
    title: "时间",
    dataIndex: "tiem",
    render: (_, { closeTime, createTime, updateTime }) => (
      <div className="">
        <div className="">
          创建时间：{new Date(createTime).toLocaleString()}
        </div>
        <div>更新时间：{new Date(updateTime).toLocaleString()}</div>
      </div>
    )
  },
  {
    title: "操作",
    dataIndex: "操作",
    render: () => (
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              label: <div>接单</div>,
              disabled: true
            },
            {
              key: "2",
              label: <div>配送完成</div>,
              disabled: true
            },
            {
              key: "3",
              label: <div>确认完成</div>,
              disabled: true
            },
            {
              key: "4",
              label: <div>取消</div>,
              disabled: true
            }
          ]
        }}
        placement="bottom"
      >
        <Button
          className="h-[24px] w-[31.6px] px-[7px] border-[#955ce6] ml-[5px] flex items-center "
          disabled
        >
          <Icon icon="iconoir:more-horiz" color="#955CE6" width="30" />
        </Button>
      </Dropdown>
    )
  }
];

interface data {
  orderNo: string;
  nickName: string;
  avatarUrl: string;
  mobileNumber: string;
  timePrice: number;
  distancePrice?: number;
  weightPrice?: number;
  startPrice?: number;
  payAmount: number;
  goodsDesc: string;
  endAddress: {
    contactName: string;
    addressDetail: string;
  };
  startAddress: {
    city: string;
    addressDetail: string;
    contactName: string;
    mobileNumber: string;
  };
  status: number;
  refundAmount: number;
  refundStatus: number;
  closeTime: string;
  createTime: string;
  updateTime: string;
}

const Orders: FC = () => {
  const [form] = useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [getcurrent, setcurrent] = useState(1); // 页码存储
  const [getInputData, setInputsData] = useState({}); // 搜索框内数据存储

  // 数据请求
  const { data, refresh } = useRequest(
    async () =>
      await getOrderList({ current: getcurrent, pageSize: 20, ...getInputData })
  );

  // 将Form表单中的数据存起来
  const onFinish = (values: string) => {
    console.log("Success:", values);
    setInputsData(values);
  };

  // 当数据发生改变时 刷新页面
  useEffect(() => {
    refresh();
  }, [getInputData, getcurrent]);

  // 手动刷新
  const handleClear = () => {
    form.resetFields(); // 重置所有表单字段
    setInputsData(() => {});
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<data> = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <div className="text-[24px] text-[500] ">用户列表</div>
        <div className="flex items-start flex-wrap mt-[20px]">
          <Form.Item name="userNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="用户编号" />
          </Form.Item>
          <Form.Item name="orderNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="订单编号" />
          </Form.Item>
          <Form.Item name="riderNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="骑手编号" />
          </Form.Item>
          <Form.Item
            name="mobileNumber"
            className="mr-[8px] mb-[8px] w-[200px]"
          >
            <Input size="large" placeholder="用户手机号" />
          </Form.Item>
          <Form.Item name="status" className="mr-[8px] mb-[8px] w-[200px]">
            <TreeSelect
              size="large"
              style={{ width: "100%" }}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              placeholder="状态"
              allowClear
              treeData={treeData}
            />
          </Form.Item>
        </div>
        <Form.Item className="mt-[12px]">
          <Button size="large" className="w-[120px]" onClick={handleClear}>
            取消
          </Button>
          <Button
            size="large"
            className="w-[120px] bg-[#955CE6] text-[#fff] ml-[5px]"
            type="primary"
            htmlType="submit"
          >
            搜索
          </Button>
        </Form.Item>
      </Form>
      <div className="w-[100%] py-[10px] flex items-center justify-end">
        <Icon
          icon="ion:refresh"
          className="text-[26px]"
          onClick={handleClear}
        />
      </div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data?.data?.data?.data}
        pagination={false}
        rowKey={"orderNo"}
        bordered
      />
      <div className="flex items-center justify-end">
        <p className="text-[14px]">共{data?.data?.data?.count}条数据</p>
        <Pagination
          onChange={(page) => {
            setcurrent(page);
            refresh();
          }}
          total={data?.data?.data?.count}
          pageSize={20}
        />
      </div>
    </>
  );
};

export default Orders;
