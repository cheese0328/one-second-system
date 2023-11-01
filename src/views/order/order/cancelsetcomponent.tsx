import { Form, Input, Button } from "antd";
import { Icon } from "@iconify/react";
import { PlusOutlined } from "@ant-design/icons";
const Canelsetcomponent = (itmes: string, title: string) => {
  return (
    <Form.List name={itmes}>
      {(fields, { add, remove }) => (
        <>
          <p className="text-[14px] py-[10px]">{title}:</p>
          {fields.map((field) => (
            <div key={field.key} className="flex items-center ">
              <Form.Item {...field} className="flex-1 mr-[20px]">
                <Input className="w-[100%]" />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={() => {
                    remove(field.name);
                  }}
                  className="self-end border-0"
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
          <Form.Item>
            <Button
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
  );
};

export default Canelsetcomponent;
