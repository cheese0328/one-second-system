/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { useEffect, type FC } from "react";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Input, Button, Table, Form, Pagination } from "antd";
import { Icon } from "@iconify/react";
import { getCapitaltrendData } from "@/service/api";
import { useRequest } from "ahooks";
import { useForm } from "antd/lib/form/Form";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: "订单编号"
  },
  {
    title: "平台收入"
  },
  {
    title: "代理收入"
  },
  {
    title: "骑手收入"
  },
  {
    title: "描述"
  },
  {
    title: "时间"
  }
];
const Capitaltrend: FC = () => {
  const [getullist, setullist] = useState<React.Key[]>([]);
  const [getcurrent, setcurrent] = useState(0);
  const [getInputValue, setInputValue] = useState({});
  const [form] = useForm();
  const { data, refresh } = useRequest(
    async () =>
      await getCapitaltrendData({
        current: getcurrent,
        pageSize: 20,
        ...getInputValue
      })
  );
  console.log(data);

  const list: [] = [];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setullist(newSelectedRowKeys);
  };
  const onFinish = (values: any) => {
    console.log(values);
    setInputValue(values);
  };

  useEffect(() => {
    refresh();
  }, [getInputValue, getcurrent]);
  const rowSelection = { getullist, onChange: onSelectChange };

  // 手动清空Form表单
  const handleClear = () => {
    form.resetFields(); // 重置所有表单字段
    setInputValue(() => {});
  };
  return (
    <>
      <Form
        className="pb-[40px] "
        style={{ borderBottom: "0.5px solid #999" }}
        onFinish={onFinish}
        form={form}
      >
        <div className="text-[24px] text-[500] ">资金走向列表</div>
        <div className="flex items-start flex-wrap mt-[20px]">
          <Form.Item name="orderNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="订单编号" />
          </Form.Item>
          <Form.Item name="agentNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="代理编号" />
          </Form.Item>
          <Form.Item name="cityNo" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="城市编号" />
          </Form.Item>
          <Form.Item name="desc" className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="描述" />
          </Form.Item>
        </div>
        <div className="mt-[12px]">
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
        </div>
      </Form>
      <div className="w-[100%] py-[20px]" onClick={handleClear}>
        <span className=" flex text-left w-[100%] justify-end">
          <Icon
            icon="material-symbols:refresh-rounded"
            className="text-[30px] text-[#999]"
          />
        </span>
      </div>
      <Table
        bordered
        rowSelection={rowSelection}
        columns={columns}
        dataSource={list}
        className="mt-[20px]"
        pagination={false}
        rowKey={"orderNo"}
      />
      <div className="flex items-center justify-end">
        <p>共{data?.data?.data?.count}条数据</p>
        <Pagination
          onChange={(page) => {
            refresh();
            setcurrent(page);
          }}
        />
      </div>
    </>
  );
};

export default Capitaltrend;
