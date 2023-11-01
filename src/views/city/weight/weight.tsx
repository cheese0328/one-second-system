import { type FC, useState } from "react";
import { Button, Input, Divider, Table } from "antd";
import { useNavigate } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";
import { getWeight } from "@/service/api";
import { useRequest } from "ahooks";
import { Icon } from "@iconify/react";
interface DataType {
  key: React.Key;
  tagName: string;
  weightTag: string;
  time: React.ReactElement;
  action: React.ReactElement;
}

const columns: ColumnsType<DataType> = [
  {
    title: "标签名称",
    dataIndex: "tagName"
  },
  {
    title: "重量标签",
    dataIndex: "weightTag"
  },
  {
    title: "时间",
    dataIndex: "time"
  },
  {
    title: "操作",
    dataIndex: "action"
  }
];

const Weight: FC = () => {
  const nav = useNavigate();
  const data: DataType[] = [];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  const { data: dd1 } = useRequest(getWeight);
  const datadata = dd1?.data.data.data;
  datadata?.forEach((items) => {
    data.push({
      key: items.id,
      tagName: items.tagName,
      weightTag: items.tags[0].label,
      time: (
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
      <div className="text-[24px] font-[500]">重量标签列表</div>
      <Input
        placeholder="重量标签名称"
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
            nav("/city/weight/edit/add");
          }}
        >
          添加重量标签
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

export default Weight;
