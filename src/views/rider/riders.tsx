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
  Tag,
  Table,
  Switch,
  Dropdown,
  message
} from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { getAdminRiderList, putStatus } from "@/service/api";

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

const Riders: FC = () => {
  const { Option } = Select;

  const onChange = (checked: boolean) => {
    // eslint-disable-next-line no-console
    console.log(`switch to ${checked}`);
  };

  // 复选框
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");

  const { data: RiderListData, refresh } = useRequest(
    async () =>
      await getAdminRiderList({ current: 1, pageSize: 20, ...searchData })
  );

  // 禁用启用功能
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    refresh();
  }, [searchData]);

  const statusChange = (userNo: string, status: string) => {
    putStatus({ userNo, status })
      .then((res) => {
        if (res.data.code === 200) {
          void message.success(res.data.msg);
        }
      })
      .catch(() => {});
    refresh();
  };

  // 搜索功能
  const searchSth = (value: number | string) => {
    setSearchData(value);
    refresh();
  };

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
    riderNo: string;
    nickName: string;
    createTime: string;
    updateTime: string;
    status: number;
    realname: string;
    mobileNumber: string;
    avatarUrl: string;
    userNo: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "编号",
      dataIndex: "riderNo"
    },
    {
      title: "用户",
      dataIndex: "nickName",
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <img
            className="w-[32px] h-[32px] rounded-[50%]"
            src={record.avatarUrl}
          />
          <div className="ml-[8px]">
            <p className="text-[12px] p-0 m-0">{record.nickName}</p>
            <p className="text-[12px] p-0 m-0">{record.mobileNumber}</p>
          </div>
        </div>
      )
    },
    {
      title: "身份",
      dataIndex: "realname"
    },
    {
      title: "账户余额",
      render: (text: string) => <p>元</p>
    },
    {
      title: "开启接单",
      render: (text: string) => <Switch onChange={onChange} />
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
      dataIndex: ["createTime", "updateTime"],
      render: (text: string, record: any) => (
        <div>
          创建:{time(record.createTime)}
          <br />
          更新:{time(record.updateTime)}
        </div>
      )
    },
    {
      title: "操作",
      render: (text: string, record: any) => (
        <div className="flex items-center">
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: (
                    <Button
                      type="text"
                      onClick={() => {
                        statusChange(record.userNo, "1");
                      }}
                      disabled={record.status === 1}
                    >
                      启用
                    </Button>
                  ),
                  disabled: true
                },
                {
                  key: "2",
                  label: (
                    <Button
                      type="text"
                      onClick={() => {
                        statusChange(record.userNo, "0");
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
            <Button className="border-[#955ce6] h-[24px] px-[7px] py-[2px] ml-[2px]">
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
            骑手列表
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
                <Form.Item name="riderNo" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="骑手编号"
                  />
                </Form.Item>
                {/* <Form.Item name="nickName" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="用户编号"
                  />
                </Form.Item>
                <Form.Item name="realname" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="真实姓名"
                  />
                </Form.Item> */}
                <Form.Item name="realname" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="身份证号"
                  />
                </Form.Item>
                <Form.Item name="mobileNumber" className="mr-[8px] mb-[8px]">
                  <Input className="w-[200px] h-[40px]" placeholder="手机号" />
                </Form.Item>
                <Form.Item name="status" className="mr-[8px] mb-[8px]">
                  <Select placeholder="状态">
                    <Option>状态：全部</Option>
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

        <div className="mt-[24px] flex justify-between">
          <Button
            type="primary"
            className="w-[120px] h-[40px] rounded-[4px] text-[14px]"
          >
            新增一位骑手
          </Button>
          <Button className="w-[40px] h-[40px] rounded-4px text-[18px] p-0">
            <Icon icon="gridicons:refresh" rotate={1} />
          </Button>
        </div>

        <div className="mt-[20px]">
          <Table
            rowSelection={{
              type: selectionType
            }}
            columns={columns}
            dataSource={RiderListData?.data.data.data.map((item, index) => ({
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

export default Riders;
