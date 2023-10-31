/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable no-console */

import { type FC } from "react";
import { Form, Button, message } from "antd";
import { getFeesetData, getOrderfeelData } from "@/service/api";
import { useRequest } from "ahooks";
import { InputNumber } from "antd/lib";
import { Icon } from "@iconify/react";
import { PlusOutlined } from "@ant-design/icons";

const Feeset: FC = () => {
  const { data: TipsFeesetData } = useRequest(getFeesetData);
  console.log(TipsFeesetData?.data.data);
  const onFinish = (value: Req.FeesetData) => {
    console.log(value);
    getOrderfeelData({ ...value })
      .then(() => message.success("修改成功"))
      .catch((err) => message.error("修改失败" + err.message.message));
  };
  return TipsFeesetData != null ? (
    <>
      <div className="text-[24px] text-[500]">小费配置</div>
      <Form
        name="dynamic_form_item"
        onFinish={onFinish}
        className="ml-[40px]"
        initialValues={{
          feeTips: TipsFeesetData?.data?.data?.feeTips,
          agentExtract: TipsFeesetData?.data?.data?.agentExtract,
          platformExtract: TipsFeesetData?.data?.data?.platformExtract
        }}
      >
        <Form.List name="feeTips">
          {(fields, { add, remove }) => (
            <div className=" w-[600px] mb-[20px] ">
              <p
                className="text-[14px] py-[30px]"
                title="小程序端展示的小费选项:"
              >
                小程序端展示的小费选项:
              </p>
              {fields.map((field, index) => (
                <div key={field.name} className="flex items-center ">
                  <Form.Item {...field} required={false} style={{ width: 400 }}>
                    <InputNumber
                      className="w-[100%]"
                      size="large"
                      name="field"
                    />
                  </Form.Item>
                  <Form.Item className="ml-[10px]">
                    <Button
                      className=" self-end border-0"
                      onClick={() => remove(field.name)}
                      icon={
                        <Icon
                          icon="fluent:delete-28-regular"
                          color="red"
                          className="text-[24px]"
                        />
                      }
                    />
                  </Form.Item>
                </div>
              ))}
              <Form.Item className="w-[150px]">
                <Button
                  onClick={() => {
                    add();
                  }}
                  icon={<PlusOutlined />}
                >
                  添加一项
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>

        <Form.Item name="platformExtract" style={{ width: 600 }} noStyle>
          <p className="text-[14px] py-[10px]" title="平台抽成:">
            平台抽成:
          </p>
          <InputNumber
            style={{ width: 600 }}
            size="large"
            name="platformExtract"
            defaultValue={TipsFeesetData?.data?.data?.platformExtract}
          />
        </Form.Item>
        <Form.Item name="agentExtract" style={{ width: 600 }} noStyle>
          <p className="text-[14px] py-[10px]" title="代理抽成:">
            代理抽成:
          </p>
          <InputNumber
            style={{ width: 600 }}
            size="large"
            name="agentExtract"
            defaultValue={TipsFeesetData?.data?.data?.agentExtract}
          />
        </Form.Item>

        <Form.Item className="mt-[20px]">
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  ) : null;
};

export default Feeset;
