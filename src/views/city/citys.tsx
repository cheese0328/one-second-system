import { type FC, useState, useEffect } from "react";
import { useRequest } from "ahooks";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Divider,
  Table,
  Tag,
  Tooltip,
  Dropdown,
  message
} from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { getAdminCitysList, putCityStatus } from "@/service/api";

const Wrappers = styled.div`
  .ant-select-selector {
    width: 200px !important;
    height: 40px !important;
    padding: 4px 11px !important;
    margin-bottom: 8px !important;
  }
  .ant-select-selection-search-input {
    height: 40px !important;
    padding-top: 10px;
  }
  .green {
    background-color: #f6ffed !important;
    border-color: #b7eb8f;
    color: #52c41a;
  }
  .red {
    background: #fff1f0 !important;
    border-color: #ffa39e;
    color: #f5222d;
  }
`;

const Citys: FC = () => {
  const { Option } = Select;

  // 搜索功能
  const [searchData, setSearchData] = useState({});
  useEffect(() => {
    refresh();
  }, [searchData]);
  const searchSth = (value: number | string) => {
    setSearchData(value);
    refresh();
  };

  // 获取列表数据
  const { data: CitysListData, refresh } = useRequest(
    async () =>
      await getAdminCitysList({ current: 1, pageSize: 108, ...searchData })
  );

  // 启用禁用状态切换
  // const [change] = useState(0);
  // useEffect(() => {
  //   refresh();
  // }, [change]);
  const statusChange = (cityNo: string, status: string) => {
    putCityStatus({ cityNo, status })
      .then((res) => {
        if (res.data.code === 200) {
          void message.success(res.data.msg);
        }
      })
      .catch(() => {});
    refresh();
  };

  // 复选框
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");

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

  interface DataType {
    cityNo: string;
    province: string;
    cityName: string;
    startPrice: number;
    extractHelpDeliver: number;
    extractHelpGet: number;
    extractHelpBuy: number;
    extractHelpDeliverForAgent: number;
    extractHelpGetForAgent: number;
    extractHelpBuyForAgent: number;
    createTime: string;
    updateTime: string;
    status: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "编号",
      dataIndex: "cityNo"
    },
    {
      title: "城市",
      dataIndex: "province",
      render: (text: string, record: DataType) => (
        <div>
          {record.province} - {record.cityName}
        </div>
      )
    },
    {
      title: "起步价",
      dataIndex: "startPrice",
      render: (text: string, record: DataType) => (
        <div>{record.startPrice}元</div>
      )
    },
    {
      title: "平台抽成",
      dataIndex: ["extractHelpDeliver", "extractHelpGet", "extractHelpBuy"],
      render: (text: string, record: DataType) => (
        <div>
          <span>送{record.extractHelpDeliver * 100}% |</span>
          <span> 取{record.extractHelpGet * 100}% |</span>
          <span> 买{record.extractHelpBuy * 100}%</span>
        </div>
      )
    },
    {
      title: "代理抽成",
      dataIndex: [
        "extractHelpDeliverForAgent",
        "extractHelpGetForAgent",
        "extractHelpBuyForAgent"
      ],
      render: (text: string, record: DataType) => (
        <div>
          <span>送{record.extractHelpDeliverForAgent * 100}% |</span>
          <span> 取{record.extractHelpGetForAgent * 100}% |</span>
          <span> 买{record.extractHelpBuyForAgent * 100}%</span>
        </div>
      )
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (status: number, record: DataType) => (
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
      dataIndex: ["createTime", "updateTime"],
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
      dataIndex: "mobileNumber",
      render: (text: string, record) => (
        <div className="flex items-center">
          <Tooltip placement="top" title="操作人" className="cursor-pointer">
            <Icon
              icon="mingcute:user-setting-fill"
              color="#955ce6"
              className="text-[18px]"
            />
          </Tooltip>
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: <Button type="text">创建群聊</Button>
                },
                {
                  key: "2",
                  label: <Button type="text">修改</Button>
                },
                {
                  key: "3",
                  label: (
                    <Button
                      type="text"
                      onClick={() => {
                        statusChange(record.cityNo, "1");
                      }}
                      disabled={record.status === 1}
                    >
                      启用
                    </Button>
                  )
                },
                {
                  key: "4",
                  label: (
                    <Button
                      type="text"
                      onClick={() => {
                        statusChange(record.cityNo, "0");
                      }}
                      disabled={record.status === 0}
                    >
                      禁用
                    </Button>
                  )
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
      )
    }
  ];

  return (
    <Wrappers>
      <div className="p-[20px]">
        {/* 标题 */}
        <Row>
          <Col span={24} className="text-[20px] font-[500]">
            运营城市列表
          </Col>
        </Row>

        {/* 搜索 */}
        <div className="flex flex-col mt-[20px]">
          <div>
            <Form
              onFinish={searchSth}
              name="control-hooks"
              style={{ maxWidth: "1100px" }}
            >
              <div className="flex flex-wrap">
                <Form.Item name="cityNo" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="城市编号"
                  />
                </Form.Item>
                <Form.Item name="province" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="省/直辖市/自治区"
                  />
                </Form.Item>
                <Form.Item name="cityName" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="城市名称"
                  />
                </Form.Item>
                <Form.Item name="status" className="mr-[8px] mb-[8px]">
                  <Input className="w-[200px] h-[40px]" placeholder="手机号" />
                </Form.Item>
                <Form.Item name="dropDown" className="mr-[8px] mb-[8px]">
                  <Select placeholder="状态">
                    <Option value="null">状态：全部</Option>
                    <Option value="1">状态：启用</Option>
                    <Option value="0">状态：禁用</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="mt-[10px]">
                <Form.Item>
                  <Button
                    onClick={() => {
                      setSearchData("");
                      refresh();
                    }}
                    className="w-[120px] h-[40px] rounded-[4px] text-[14px] mr-[2px]"
                  >
                    取消
                  </Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-[120px] h-[40px] rounded-[4px] text-[14px]"
                  >
                    搜索
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>

        {/* 分割线 */}
        <Divider className="m-0" />

        {/* 标题 */}
        <div className="mt-[24px] flex justify-between">
          <Button
            type="primary"
            className="w-[120px] h-[40px] rounded-[4px] text-[14px]"
          >
            添加运营城市
          </Button>
          <Button className="w-[40px] h-[40px] rounded-4px text-[18px] p-0">
            <Icon icon="gridicons:refresh" rotate={1} />
          </Button>
        </div>

        {/* 表格 */}
        <div className="mt-[20px]">
          <Table
            rowSelection={{
              type: selectionType
            }}
            columns={columns}
            dataSource={CitysListData?.data.data.data.map((item, index) => ({
              ...item,
              key: index
            }))}
            bordered={true}
            pagination={{
              defaultPageSize: 20,
              showTotal: (tables) => `共${tables}条数据`
            }}
          />
        </div>
      </div>
    </Wrappers>
  );
};

export default Citys;
