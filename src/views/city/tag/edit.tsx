/* eslint-disable no-console */
import { type FC } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Citys: FC = () => {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  interface TagType {
    tagname?: string;
    tag?: string;
  }
  return (
    <>
      <div className="flex text-[#333333] px-[24px] py-[16px] text-[20px] items-center">
        <Icon
          className=" cursor-pointer"
          icon="icon-park:return"
          onClick={() => {
            nav("/city/tag/tag");
          }}
        />
        <span className="pl-[16px] text-[24px] font-[900]">新增物品标签组</span>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="px-[60px] pt-[20px]"
      >
        <Form.Item<TagType>
          label="物品标签组名称"
          name="tagname"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<TagType>
          label="标签"
          name="tag"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交保存
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Citys;
