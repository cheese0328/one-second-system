import { type FC } from "react";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { Input, Button, Table } from "antd";
import { Icon } from "@iconify/react";

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
  const list: [] = [];
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setullist(newSelectedRowKeys);
  };
  const rowSelection = { getullist, onChange: onSelectChange };
  return (
    <>
      <div className="pb-[40px] " style={{ borderBottom: "0.5px solid #999" }}>
        <div className="text-[24px] text-[500] ">资金走向列表</div>
        <div className="flex items-start flex-wrap mt-[20px]">
          <div className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="订单编号" />
          </div>
          <div className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="代理编号" />
          </div>
          <div className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="城市编号" />
          </div>
          <div className="mr-[8px] mb-[8px] w-[200px]">
            <Input size="large" placeholder="描述" />
          </div>
        </div>
        <div className="mt-[12px]">
          <Button size="large" className="w-[120px]">
            取消
          </Button>
          <Button
            size="large"
            className="w-[120px] bg-[#955CE6] text-[#fff] ml-[5px]"
          >
            搜索
          </Button>
        </div>
      </div>
      <div className="w-[100%] py-[20px]">
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
      />
    </>
  );
};

export default Capitaltrend;
