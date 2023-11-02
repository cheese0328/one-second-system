/* eslint-disable no-console */
import { type FC } from "react";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import {
  Input,
  Form,
  InputNumber,
  Select,
  Radio,
  Button,
  notification
} from "antd";
import { putupdateCoupons } from "@/service/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCoupons: FC = () => {
  const { id } = useParams();
  const valuedata = new URLSearchParams(id);
  const UrlObj = Object.fromEntries(valuedata.entries());
  const nav = useNavigate();

  interface updatecoupons {
    data: {
      code: number;
      msg: string;
      pageSize: number;
      current: number;
      count: number;
      totalPages: number;
      data: [];
    };
  }
  const onRunrunAdminAddCouponsSuccess = (res: updatecoupons) => {
    console.log(res);

    if (res.data.code === 200) {
      notification.success({
        message: "修改成功",
        description: "修改成功！"
      });
      nav(-1);
    }
  };
  const { run: runAdminAddCoupons } = useRequest(
    async (values) => await putupdateCoupons({ ...values }),
    {
      manual: true,
      onSuccess: onRunrunAdminAddCouponsSuccess
    }
  );

  const [form] = Form.useForm();

  return (
    <>
      <div
        className=" flex items-center"
        onClick={() => {
          nav(-1);
        }}
      >
        <Icon
          icon="mingcute:arrow-left-line"
          className="font-bold text-[25px]"
        />
        <div className=" text-[20px] text-[#333] ml-[10px] font-bold">
          修改优惠卷
        </div>
      </div>
      <Form
        className="ml-[20px] w-[500px]"
        form={form}
        onFinish={runAdminAddCoupons}
        initialValues={
          // UrlObj
          {
            couponName: UrlObj.couponName,
            discountAmount: Number(UrlObj.discountAmount),
            conditionsAmount: Number(UrlObj.conditionsAmount),
            conditionService: UrlObj.conditionService,
            limitNumber: Number(UrlObj.limitNumber),
            deadlineDays: Number(UrlObj.deadlineDays),
            status: Number(UrlObj.status),
            couponNo: UrlObj.couponNo
          }
        }
      >
        {/* 优惠卷名称 */}

        <div className=" flex items-center mt-[20px]">
          <Icon icon="gg:asterisk" className=" text-[red]" />
          <div>优惠卷名称 :</div>
        </div>
        <Form.Item name="couponName">
          <Input
            defaultValue={UrlObj.couponName}
            className=" w-[500px] h-[40px] mt-[10px]"
          />
        </Form.Item>
        <div className=" flex justify-between ">
          {/* 优惠卷金额 */}
          <div>
            <div>优惠卷金额</div>
            <Form.Item name="discountAmount">
              <InputNumber
                min={0}
                max={100000}
                defaultValue={Number(UrlObj.deadlineDays)}
                className="w-[238.4px] mt-[10px]"
              />
            </Form.Item>
          </div>
          {/* 满足条件金额 */}
          <div>
            <div>满足条件金额</div>
            <Form.Item name="conditionsAmount">
              <InputNumber
                min={0}
                max={100000}
                defaultValue={Number(UrlObj.conditionsAmount)}
                // onChange={onChange}
                className="w-[238.4px] mt-[10px]"
              />
            </Form.Item>
          </div>
        </div>
        {/* 优惠卷类型 */}
        <div>
          <div className=" flex items-center mt-[20px]">
            <Icon icon="gg:asterisk" className=" text-[red]" />
            <div>优惠卷类型 :</div>
          </div>
          <Form.Item name="conditionService">
            <Select
              labelInValue
              defaultValue={{ value: UrlObj.conditionService }}
              style={{ width: 500, marginRight: 8, height: 40 }}
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
          </Form.Item>
        </div>
        {/* 限制数量 */}

        <div>限制数量</div>
        <Form.Item name="limitNumber">
          <InputNumber
            min={0}
            max={100000}
            defaultValue={Number(UrlObj.limitNumber)}
            // onChange={onChange}
            className="w-[238.4px] mt-[10px]"
          />
        </Form.Item>
        {/* 有效天数 */}
        <div className=" flex items-center mt-[20px]">
          <div>有效天数 :</div>
        </div>
        <Form.Item name="deadlineDays">
          <Input
            defaultValue={Number(UrlObj.deadlineDays)}
            className=" w-[500px] h-[40px] mt-[10px]"
          />
        </Form.Item>
        <div className="text-[#999] text-[14px]">
          领取后开始计算到期时间, -1为不限
        </div>

        {/* 状态 */}
        <Form.Item name="status">
          <Radio.Group name="radiogroup" defaultValue={Number(UrlObj.status)}>
            <Radio value={1}>启用</Radio>
            <Radio value={0}>禁用</Radio>
          </Radio.Group>
        </Form.Item>

        {/* couponNo */}
        <Form.Item name="couponNo" style={{ display: "none" }}>
          <input type="text" />
        </Form.Item>
        {/* 提交保存 */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-[87px] mt-[20px] "
          >
            提交保存
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default UpdateCoupons;
