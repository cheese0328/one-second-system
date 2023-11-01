import { type FC } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space } from "antd";
const Citys: FC = () => {
  const nav = useNavigate();
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log("Received values of form:", values);
  };
  return (
    <>
      <div className="flex text-[#333333] px-[24px] py-[16px] text-[20px] items-center">
        <Icon
          className=" cursor-pointer"
          icon="icon-park:return"
          onClick={() => {
            nav("/city/weight/weight");
          }}
        />
        <span className="pl-[16px] text-[24px] font-[900]">新增重量标签</span>
      </div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
        layout="vertical"
        className="px-[60px] pt-[20px]"
      >
        <Form.Item label="标签名称">
          <Input />
        </Form.Item>
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(name);
                    }}
                  />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="default"
                  onClick={() => {
                    add();
                  }}
                  icon={<PlusOutlined />}
                >
                  添加一项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交保存
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Citys;
