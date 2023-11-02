/* eslint-disable @typescript-eslint/no-misused-promises */
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
  Dropdown,
  Modal
} from "antd";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import {
  getAdminRiderRegisterList,
  putAdminRiderPass,
  putAdminRiderRefuse
} from "@/service/api";

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

  // 搜索功能
  const [searchData, setSearchData] = useState({});
  useEffect(() => {
    refresh();
  }, [searchData]);
  const searchSth = (value: number | string) => {
    setSearchData(value);
    refresh();
  };

  // 复选框
  const [selectionType] = useState<"checkbox" | "radio">("checkbox");

  const { data: RegisterListData, refresh } = useRequest(
    async () =>
      await getAdminRiderRegisterList({
        current: 1,
        pageSize: 20,
        ...searchData
      })
  );

  // 通过审核操作
  const statusChange = (userNo: string) => {
    putAdminRiderPass({ userNo }).catch(() => {});
    refresh();
  };

  // 拒绝审核对话框&拒绝审核操作
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [no, setNo] = useState("");
  const [form] = Form.useForm();
  const statusRefuse = async (userNo: string, refuseReason: string) => {
    return await putAdminRiderRefuse({ userNo, refuseReason }).catch(() => {});
  };
  const onSave = () => {
    const value = form.getFieldValue("refuseReason");
    statusRefuse(no, value)
      .then(() => {
        setIsModalOpen(false);
        refresh();
      })
      .catch(() => {});
  };
  const handleCancel = () => {
    form.resetFields(); // 重置表单
    setIsModalOpen(false);
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
    userNo: string;
    realname: string;
    idCardNo: string;
    avatarFaceImage: string;
    nationalFaceImage: string;
    createTime: string;
    updateTime: string;
    status: number;
    refuseReason: any;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "用户编号",
      dataIndex: "userNo"
    },
    {
      title: "姓名",
      dataIndex: "realname",
      render: (text: string, record: DataType) => <p>{record.realname}</p>
    },
    {
      title: "身份证号码",
      dataIndex: "idCardNo"
    },
    {
      title: "身份证头像照片",
      dataIndex: "avatarFaceImage",
      render: (text: string, record: DataType) => (
        <img
          src={record.avatarFaceImage}
          alt=""
          className="w-[150px] h-[100px]"
        />
      )
    },
    {
      title: "身份证国徽照片",
      dataIndex: "nationalFaceImage",
      render: (text: string, record: DataType) => (
        <img
          src={record.nationalFaceImage}
          alt=""
          className="w-[150px] h-[100px]"
        />
      )
    },
    {
      title: "状态",
      dataIndex: "status",
      render: (status: number, record: DataType) => (
        <>
          {status === 1 ? (
            <Tag className="green">通过审核</Tag>
          ) : (
            <>
              <Tag className="red">未通过</Tag>
              <div className="mt-[8px] text-[#999]">{record.refuseReason}</div>
            </>
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
      render: (text: string, record: DataType) => (
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
                        statusChange(record.userNo);
                      }}
                      disabled={record.status === 1}
                    >
                      通过审核
                    </Button>
                  )
                },
                {
                  key: "2",
                  label: (
                    <Button
                      type="text"
                      onClick={(r) => {
                        setIsModalOpen(true);
                        setNo(record.userNo);
                      }}
                      disabled={record.status === 2}
                    >
                      拒绝通过
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
            骑手审核列表
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
                <Form.Item name="userNo" className="mr-[8px] mb-[8px]">
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
                </Form.Item>
                <Form.Item name="idCardNo" className="mr-[8px] mb-[8px]">
                  <Input
                    className="w-[200px] h-[40px]"
                    placeholder="身份证号"
                  />
                </Form.Item>
                <Form.Item name="status" className="mr-[8px] mb-[8px]">
                  <Input className="w-[200px] h-[40px]" placeholder="手机号" />
                </Form.Item>
                <Form.Item name="dropDown" className="mr-[8px] mb-[8px]">
                  <Select placeholder="状态">
                    <Option>状态：全部</Option>
                    <Option value="1">状态：已通过</Option>
                    <Option value="0">状态：未通过</Option>
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
            dataSource={RegisterListData?.data.data.data.map((item, index) => ({
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
        <Modal
          title="拒绝理由"
          maskClosable
          centered
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false);
          }}
          footer={[
            <>
              <Button key="cancle" onClick={handleCancel}>
                取消
              </Button>
              <Button key="submit" type="primary" onClick={onSave}>
                确定
              </Button>
            </>
          ]}
        >
          <Form form={form}>
            <Form.Item name="refuseReason">
              <Input type="text" placeholder="请输入拒绝理由" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </Wrappers>
  );
};

export default Riders;
