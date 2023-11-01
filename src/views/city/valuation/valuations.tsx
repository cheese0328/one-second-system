/* eslint-disable no-console */
import { type FC } from "react";
import { Input, Button, Divider, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminCity } from "@/service/api";
import { useRequest } from "ahooks";
import { Icon } from "@iconify/react";
// import { useRequest } from "ahooks";

interface DataType {
  key: React.Key;
  ruleName: string;
  distanceRule: React.ReactElement;
  weightRule: React.ReactElement;
  timeRule: React.ReactElement;
  createTime: React.ReactElement;
  action: React.ReactElement;
}

const columns: ColumnsType<DataType> = [
  {
    title: "规则名称",
    dataIndex: "ruleName"
  },
  {
    title: "距离规则",
    dataIndex: "distanceRule"
  },
  {
    title: "重量规则",
    dataIndex: "weightRule"
  },
  {
    title: "时间规则",
    dataIndex: "timeRule"
  },
  {
    title: "创建时间",
    dataIndex: "createTime"
  },
  {
    title: "操作",
    dataIndex: "action"
  }
];

const Valuations: FC = () => {
  const data: DataType[] = [];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const nav = useNavigate();

  const { data: dd1 } = useRequest(getAdminCity);
  const datadata = dd1?.data.data.data;
  datadata?.forEach((items) => {
    data.push({
      key: items.id,
      ruleName: items.ruleName,
      distanceRule: (
        <div>
          {items.ruleContext.distance.map((items) => (
            <p key={items.gt} className="my-0">
              在{items.gt}~{items.lte}距离内,每{items.unitDistance}公里加价
              {items.price}元
            </p>
          ))}
        </div>
      ),
      weightRule: (
        <div>
          {items.ruleContext.weight.map((items) => (
            <p key={items.gt} className="my-0">
              在{items.gt}~{items.lte}距离内,每{items.unitWeight}千克加价
              {items.price}元
            </p>
          ))}
        </div>
      ),
      timeRule: <div>在1~3时间段内,加价1元</div>,
      createTime: (
        <div>
          <p className="m-0">
            创建:{items.createTime.split("T")[0].replace(/-/g, "/")}{" "}
            {items.createTime.split("T")[1].substring(0, 5)}
          </p>
          <p className="m-0">
            更新:{items.updateTime.split("T")[0].replace(/-/g, "/")}{" "}
            {items.updateTime.split("T")[1].substring(0, 5)}
          </p>
        </div>
      ),
      action: (
        <>
          <div className="flex justify-center items-center">
            <Icon
              icon="clarity:administrator-solid"
              className="text-[24px] text-[#955ce6] mr-[5px]"
            />
            <Button
              type="default"
              className="border-[#955ce6] flex justify-center w-[40px] h-[30px]"
            >
              <span className="text-[20px] text-[#955ce6]">
                <Icon icon="ri:more-fill" />
              </span>
            </Button>
          </div>
        </>
      )
    });
  });
  return (
    <>
      <div className="text-[24px] font-[500]">计价规则列表</div>
      <Input
        placeholder="规则名称"
        style={{ width: "200px", height: "40px", marginTop: "20px" }}
      />
      <div className="flex mt-[20px]">
        <Button className="w-[120px] h-[40px]">取消</Button>
        <Button className="w-[120px] h-[40px] ml-[5px]" type="primary">
          搜索
        </Button>
      </div>
      <Divider className="my-[24px]" />
      <div className="flex flex-between item-center">
        <Button
          className="w-[120px] h-[40px]"
          type="primary"
          onClick={() => {
            nav("/city/valuation/edit/add");
          }}
        >
          添加计价规则
        </Button>
      </div>
      <div className="mt-[20px]">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          bordered
        />
      </div>
    </>
  );
};

export default Valuations;
