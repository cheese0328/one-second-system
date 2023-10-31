/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */
import { type FC } from "react";
import { Button, Form, message } from "antd";
import { getCancelsetData, getOrdercancelData } from "@/service/api";
import { useRequest } from "ahooks";
import { useForm } from "antd/es/form/Form";
import Orderscomponents from "./order/orderscomponents";
import Canelsetcomponent from "./order/cancelsetcomponent";

const Cancelset: FC = () => {
  const { data } = useRequest(getCancelsetData);
  const fields = data?.data.data;
  const [form] = useForm();
  const onFinish = (data: Req.CancelsetData) => {
    getOrdercancelData({ ...data })
      .then(() => message.success("修改成功"))
      .catch((err) => message.error("修改失败" + err.message.message));
  };

  return fields != null ? (
    <>
      <div className="text-[24px] text-[500]">取消订单配置</div>
      <div className="w-[600px] px-[50px] mt-[20px] box-border">
        <Form
          name="dynamic_form_nest_item"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          initialValues={{
            userCancelRules: data?.data?.data?.userCancelRules, // 用户取消订单规则
            riderCancelRules: data?.data?.data?.riderCancelRules, // 骑手取消订单规则
            userCancelTips: data?.data?.data?.userCancelTips, // 用户取消订单选项配置
            riderCancelTips: data?.data?.data?.riderCancelTips, // 骑手取消订单项配置
            adminCancelTips: data?.data?.data?.adminCancelTips, // 管理员取消订单项配置
            agentCancelTips: data?.data?.data?.agentCancelTips // 代理取消订单项配置
          }}
          form={form}
        >
          {Orderscomponents(
            "userCancelRules",
            "用户取消订单规则",
            "用户在订单状态为【已接单、配送中】时取消订单会触发此规则",
            data?.data?.data?.userCancelRules
          )}
          {Orderscomponents(
            "riderCancelRules",
            "骑手取消订单规则",
            "骑手在订单状态为【已接单、配送中】时取消订单会触发此规则",
            data?.data?.data?.riderCancelRules
          )}

          {Canelsetcomponent("userCancelTips", "用户取消订单项配置")}
          {Canelsetcomponent("riderCancelTips", "骑手取消订单项配置")}
          {Canelsetcomponent("adminCancelTips", "管理员取消订单项配置")}
          {Canelsetcomponent("agentCancelTips", "代理取消订单项配置")}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  ) : null;
};

export default Cancelset;

// <Form.List name="items">
//             {(fields, { add, remove }) => (
//               <>
//                 <p className="text-[14px] text-[#333]"> 用户取消订单规则</p>
//                 <p className="text-[12px] text-[#999] py-[10px]">
//                   用户在订单状态为【已接单、配送中】时去掉订单会触发此规则
//                 </p>
//                 {fields.map((field, index) => (
//                   <Space
//                     key={index}
//                     style={{
//                       display: "flex",
//                       alignItems: "center"
//                     }}
//                     align="baseline"
//                   >
//                     <Form.Item className="">
//                       <p className="py-[5px] text-[14px]">时间范围(分钟):</p>
//                       <InputNumber
//                         style={{ width: 130 }}
//                         size="large"
//                         defaultValue={
//                           data?.data?.data?.userCancelRules[index]?.timeRange[0]
//                         }
//                       />
//                       ~
//                       <InputNumber
//                         style={{ width: 130 }}
//                         size="large"
//                         defaultValue={
//                           data?.data?.data?.userCancelRules[index]?.timeRange[1]
//                         }
//                       />
//                     </Form.Item>
//                     <Form.Item
//                       rules={[{ required: true, message: "Missing last name" }]}
//                       name={[field.name, "price"]}
//                       className="px-[8px] ml-[15px]"
//                     >
//                       <p className="py-[5px] text-[14px]">超时费用比例:</p>
//                       <InputNumber
//                         size="large"
//                         style={{ width: 130 }}
//                         defaultValue={
//                           data?.data?.data?.userCancelRules[index]?.price
//                         }
//                       />
//                     </Form.Item>

//                     <Button
//                       icon={
//                         <Icon
//                           icon="fluent:delete-28-regular"
//                           color="red"
//                           className="text-[24px]"
//                         />
//                       }
//                       className=" self-end border-0"
//                       onClick={() => {
//                         remove(field.name);
//                       }}
//                     />
//                   </Space>
//                 ))}
//                 <Form.Item className="w-[150px]">
//                   <Button
//                     onClick={() => {
//                       add();
//                     }}
//                     icon={<PlusOutlined />}
//                   >
//                     添加一项
//                   </Button>
//                 </Form.Item>
//               </>
//             )}
//           </Form.List>
