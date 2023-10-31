import { Form, InputNumber, Button, Space } from "antd";
import { Icon } from "@iconify/react";
import { PlusOutlined } from "@ant-design/icons";

const Orderscomponents = (
  items: string,
  titleOne: string,
  titleTow: string,
  listdata: any
) => {
  return (
    <Form.List name={items}>
      {(fields, { add, remove }) => (
        <>
          <p className="text-[14px] text-[#333]">{titleOne}</p>
          <p className="text-[12px] text-[#999] py-[10px]">{titleTow}</p>
          {fields.map((field, index) => (
            <Space
              key={index}
              style={{
                display: "flex",
                alignItems: "center"
              }}
              align="baseline"
            >
              <Form.Item className="">
                <p className="py-[5px] text-[14px]">时间范围(分钟):</p>
                <InputNumber
                  style={{ width: 130 }}
                  size="large"
                  defaultValue={listdata[index]?.timeRange[0]}
                />
                ~
                <InputNumber
                  style={{ width: 130 }}
                  size="large"
                  defaultValue={listdata[index]?.timeRange[1]}
                />
              </Form.Item>
              <Form.Item
                rules={[{ required: true, message: "Missing last name" }]}
                name={[field.name, "price"]}
                className="px-[8px] ml-[15px]"
              >
                <p className="py-[5px] text-[14px]">超时费用比例:</p>
                <InputNumber
                  size="large"
                  style={{ width: 130 }}
                  defaultValue={listdata[index]?.price}
                />
              </Form.Item>

              <Button
                icon={
                  <Icon
                    icon="fluent:delete-28-regular"
                    color="red"
                    className="text-[24px]"
                  />
                }
                className=" self-end border-0"
                onClick={() => {
                  remove(field.name);
                }}
              />
            </Space>
          ))}
          <Form.Item className="w-[150px]">
            <Button
              onClick={() => {
                add(fields[0].name);
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

export default Orderscomponents;
