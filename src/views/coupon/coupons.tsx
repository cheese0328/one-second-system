/* eslint-disable no-console */
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import {
  Button,
  Dropdown,
  Input,
  Select,
  Table,
  Tag,
  Form,
  message
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useRef, useState } from "react";
import { getadminCouponList, putCouponsState, adminInfo } from "@/service/api";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: React.Key;
  name: string; // 优惠券名称
  ranges: string[]; // 适用范围
  money: string; // 优惠金额
  meet: string; // 满足条件
  day: string; // 有效天数
  recNumber: string; // 领取人数
  useNumber: string; // 使用人数
  // open: React.ReactElement;
  tags: string[]; // 状态
  time: React.ReactElement; // 时间
  operate: React.ReactElement; // 操作
}

// 第一行标题内容
const columns: ColumnsType<DataType> = [
  {
    title: "优惠券名称",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "适用范围",
    dataIndex: "range",
    key: "ranges",
    render: (_, { ranges }) => (
      <>
        {ranges.map((range) => {
          let color = "green";
          let title = "全部";
          if (range === "helpDeliver") {
            color = "cyan";
            title = "帮我送";
          } else if (range === "helpBuy") {
            color = "purple";
            title = "帮我买";
          } else if (range === "helpGet") {
            color = "blue";
            title = "帮我取";
          } else if (range === "hepGet") {
            color = "white";
            title = "";
          }
          return (
            <Tag color={color} key={range}>
              {title}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: "优惠金额",
    dataIndex: "money",
    key: "money"
  },
  {
    title: "满足条件",
    dataIndex: "meet",
    key: "meet"
  },
  {
    title: "有效天数",
    dataIndex: "day",
    key: "day"
  },
  {
    title: "领取人数",
    dataIndex: "recNumber",
    key: "recNumber"
  },
  {
    title: "使用人数",
    dataIndex: "useNumber",
    key: "useNumber"
  },
  {
    title: "状态", // 0 :禁用  1：启用
    key: "tags",
    // dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = "green";
          let title = "启用";
          if (tag === "0") {
            color = "volcano";
            title = "禁用";
          }
          return (
            <Tag color={color} key={tag}>
              {title}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time"
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "operate"
  }
];

// 操作的数据 修改/启用/禁用

const Coupons = () => {
  // 请求并拿到数据
  const nav = useNavigate();
  const [info, setInfo] = useState<Res.AdminInfo>();
  const inputRef = useRef(null);
  useEffect(() => {
    adminInfo()
      .then((res) => {
        // console.log(res);
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const currentID = 1;
  // const [output, setOutput] = useState();
  const [seek, setSeek] = useState({});
  const { data, refresh } = useRequest(
    async () =>
      await getadminCouponList({ current: currentID, pageSize: 20, ...seek })
  );
  useEffect(() => {
    refresh();
  }, [seek]);
  // 更改状态请求
  const onFinishStaus = (couponNo: string, status: string) => {
    putCouponsState({ couponNo, status })
      .then((res) => {
        if (res.data.code === 200) {
          void message.success(res.data.msg);
          refresh();
        }
      })
      .catch((rsq) => {
        refresh();
      });
  };
  // const onruningSuccessStaus = (res: any) => {
  //   if (res.data.code === 200) {
  //     notification.success({
  //       message: "修改成功",
  //       description: "修改成功！"
  //     });
  //     nav("/coupon/coupons");
  //   }
  // };

  // const { run: runingStaus } = useRequest(
  //   async (value) => await putCouponsState({ ...value }),
  //   {
  //     manual: true,
  //     onSuccess: onruningSuccessStaus
  //   }
  // );
  // 用户信息 dataPoop
  const dataPoop: DataType[] = [];
  interface RenderingData {
    id: number;
    createTime: string;
    updateTime: string;
    couponNo: string;
    couponName: string;
    deadlineDays: number;
    discountAmount: number;
    conditionsAmount: number;
    conditionService: string;
    cumulativeDrawNo: number;
    cumulativeUseNo: number;
    limitNumber: number;
    status: number;
    updatedBy: string;
  }
  data?.data.data.data.forEach((item: RenderingData) => {
    dataPoop.push({
      key: `${item.id}`,
      name: `${item.couponName}`,
      ranges: [`${item.conditionService}`],
      money: `${item.discountAmount}元`,
      meet: `${item.conditionsAmount}元`,
      day: `${item.deadlineDays}天`,
      recNumber: `${item.cumulativeUseNo}/${item.limitNumber}`,
      useNumber: `${item.cumulativeUseNo}/${item.cumulativeDrawNo}`,
      tags: [`${item.status}`], // 0 :禁用  1：启用
      time: (
        <div>
          <p className="m-0">
            创建:{new Date(item.createTime).toLocaleString()}
          </p>
          <p className="m-0">
            更新:{new Date(item.updateTime).toLocaleString()}
          </p>
        </div>
      ),
      operate: (
        <div className=" flex items-center text-[#955ce6]">
          <Icon
            icon="fa6-solid:user-gear"
            onClick={() => {
              nav(`/user/admins?adminNo=${info?.data.adminNo}`);
            }}
          />
          <Dropdown
            placement="bottom"
            dropdownRender={() => {
              return (
                <div className=" bg-[white] z-[3] flex flex-col items-start">
                  <Button
                    type="text"
                    onClick={() => {
                      // console.log(item.discountAmount);

                      nav(
                        `/coupon/edit/updateCoupons/id=${item.id}&couponName=${item.couponName}&conditionService=${item.conditionService}&discountAmount=${item.discountAmount}&conditionsAmount=${item.conditionsAmount}&deadlineDays=${item.deadlineDays}&status=${item.status}&couponNo=${item.couponNo}&limitNumber=${item.limitNumber}`
                      );
                    }}
                  >
                    修改
                  </Button>
                  {item.status === 0 ? (
                    <Button
                      type="text"
                      onClick={() => {
                        onFinishStaus(item.couponNo, "1");
                      }}
                    >
                      启用
                    </Button>
                  ) : (
                    <Button
                      type="text"
                      disabled
                      onClick={() => {
                        onFinishStaus(item.couponNo, "1");
                      }}
                    >
                      启用
                    </Button>
                  )}
                  {item.status === 1 ? (
                    <Button
                      type="text"
                      onClick={() => {
                        onFinishStaus(item.couponNo, "0");
                      }}
                    >
                      禁用
                    </Button>
                  ) : (
                    <Button
                      type="text"
                      disabled
                      onClick={() => {
                        onFinishStaus(item.couponNo, "0");
                      }}
                    >
                      禁用
                    </Button>
                  )}
                </div>
              );
            }}
          >
            <Icon
              icon="ri:more-fill"
              className="w-[32px] h-[24px] text-[20px] border-[1px] border-solid rounded-[4px] my-[4px] mx-[8px]"
            />
          </Dropdown>
        </div>
      )
    });
  });
  // 多选框
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  };
  // const inputRef = useRef(null);
  const onFinish = (values: { couponNam?: string | undefined | null }) => {
    setSeek(values);
    refresh();
  };
  const [form] = Form.useForm();
  const changvalue = () => {
    form.resetFields();
    refresh();
    setSeek(() => {});
  };

  return (
    <div>
      <h1 className="text-[24px] font-[500]">优惠券列表</h1>
      <Form onFinish={onFinish} form={form}>
        <div className=" flex flex-wrap">
          {/* <Form onFinish={onFinish} /> */}
          {/* <Form onFinish={onFinish}> */}
          <Form.Item name="couponName">
            <Input
              placeholder="优惠券名称"
              className=" w-[200px] h-[40px] mr-[8px] mb-[8px]"
              ref={inputRef}
            />
          </Form.Item>
          <Select
            labelInValue
            // defaultValue={{ value: "types", label: "优惠券类型" }}
            placeholder="优惠券类型"
            style={{ width: 200, marginRight: 8, height: 40 }}
            options={[
              {
                value: "ALL",
                label: "全部"
              },
              {
                value: "helpDeliver",
                label: "帮我送"
              },
              {
                value: "helpGet",
                label: "帮我取"
              },
              {
                value: "helpBuy",
                label: "帮我买"
              }
            ]}
          />
          <Select
            labelInValue
            placeholder="状态"
            style={{ width: 200, marginRight: 8, height: 40 }}
            options={[
              {
                value: "all",
                label: "状态: 全部"
              },
              {
                value: "start",
                label: "状态: 启用"
              },
              {
                value: "disable",
                label: "状态: 禁用"
              }
            ]}
          />
          {/* </Form> */}
        </div>
        {/* 取消搜索按钮 */}
        <div className=" flex mt-[12px]">
          <Button
            className="w-[120px] h-[40px] mr-[4px]"
            onClick={() => {
              changvalue();
              setSeek("");
              refresh();
            }}
          >
            取消
          </Button>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-[120px] h-[40px]"
              // onClick={() => {
              //   console.log(inoutValue);
              //   // console.log(queryData);
              // }}
            >
              搜索
            </Button>
          </Form.Item>
        </div>
        <div className=" w-[100%] min-w-[100%] h-[1px] my-[24px] bg-[#e8e8e8]" />
        {/* 添加优惠券 */}
        <div>
          <Button
            type="primary"
            className="w-[120px] h-[40px]"
            onClick={() => {
              nav("/coupon/edit/addCoupons");
            }}
          >
            添加优惠券
          </Button>
        </div>
        {/* 表格 */}
        <div className="mt-[12px]">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataPoop}
            bordered
            // total={85}
            // pagination={{ pageSize: 20 }}
            // total={50}
            pagination={{
              showQuickJumper: true,
              pageSize: 20,
              showSizeChanger: false,
              showTotal: (total) => `共 ${total} 条数据`
            }}
            onChange={(page) => {
              // setCurrentID(page.current!);
            }}
            // onRow={(record) => {
            //   return {
            //     onClick: (event) => {
            //       setOutput(record);
            //       console.log(record);
            //     }
            //   };
            // }}
          />
        </div>
      </Form>
    </div>
  );
};
export default Coupons;
