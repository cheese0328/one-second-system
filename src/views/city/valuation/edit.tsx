import { type FC } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, notification } from "antd";
import { postValuation } from "@/service/api";
import { useRequest } from "ahooks";
const Edit: FC = () => {
  const nav = useNavigate();

  // const onFinish = (values: any) => {
  //   // eslint-disable-next-line no-console
  //   console.log("Received values of form:", values);
  // };
  const onruningSuccessStaus = (res: any) => {
    if (res.data.code === 200) {
      notification.success({
        message: "修改成功",
        description: "修改成功！"
      });
      nav("/city/valuation/valuations");
    }
  };

  const { run: run11 } = useRequest(
    async (value) => await postValuation({ ...value }),
    {
      manual: true,
      onSuccess: onruningSuccessStaus
    }
  );

  return (
    <>
      <div className="flex text-[#333333] px-[24px] py-[16px] text-[20px] items-center">
        <Icon
          className=" cursor-pointer"
          icon="icon-park:return"
          onClick={() => {
            nav("/city/valuation/valuations");
          }}
        />
        <span className="pl-[16px] text-[24px] font-[900]">新增计价规则</span>
      </div>
      <div className="content w-[600px] px-[50px]">
        <Form
          name="dynamic_form_nest_item"
          onFinish={run11}
          style={{ maxWidth: 600 }}
          autoComplete="off"
          layout="vertical"
          initialValues={{
            ruleContext: { distance: [], weight: [], time: [] }
          }}
        >
          <Form.Item
            label="规则名称"
            name="ruleName"
            rules={[{ required: true, message: "请输入规则名称" }]}
          >
            <Input />
          </Form.Item>

          <div>距离规则</div>
          <Form.List name={["ruleContext", "distance"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Space
                      align="baseline"
                      className=" flex items-center mt-[10px]"
                    >
                      <div>
                        <div>范围(km):</div>
                        <div className="flex items-center">
                          <Form.Item
                            {...restField}
                            name={[name, "gt"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                          <span>~</span>
                          <Form.Item
                            {...restField}
                            name={[name, "lte"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </div>

                      <div>
                        <div>距离单位(km):</div>
                        <Form.Item
                          {...restField}
                          name={[name, "unitDistance"]}
                          rules={[
                            { required: true, message: "Missing last name" }
                          ]}
                          className="mb-0"
                        >
                          <Input />
                        </Form.Item>
                      </div>

                      <div>
                        <div>价格(元):</div>
                        <Form.Item
                          {...restField}
                          name={[name, "price"]}
                          rules={[
                            { required: true, message: "Missing last name" }
                          ]}
                          className="mb-0"
                        >
                          <Input />
                        </Form.Item>
                      </div>

                      <div className="w-[25px] h-[25px] bg-[red] flex justify-center items-center rounded-[25px] cursor-pointer mt-[24px]">
                        <Icon
                          icon="mdi:trash-outline"
                          color="white"
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      </div>
                    </Space>

                    <p className="text-[#ccc]">
                      距离在(1kg~3kg)范围内,<span>每1kg</span>加价1元
                    </p>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => {
                      add();
                    }}
                    icon={<PlusOutlined />}
                  >
                    添加距离规则
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <div>重量规则</div>
          <Form.List name={["ruleContext", "weight"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Space
                      align="baseline"
                      className=" flex items-center mt-[10px]"
                    >
                      <div>
                        <div>范围(kg):</div>
                        <div className="flex items-center">
                          <Form.Item
                            {...restField}
                            name={[name, "gt"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                          <span>~</span>
                          <Form.Item
                            {...restField}
                            name={[name, "lte"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </div>

                      <div>
                        <div>重量单位(kg):</div>
                        <Form.Item
                          {...restField}
                          name={[name, "unitWeight"]}
                          rules={[
                            { required: true, message: "Missing last name" }
                          ]}
                          className="mb-0"
                        >
                          <Input />
                        </Form.Item>
                      </div>

                      <div>
                        <div>价格(元):</div>
                        <Form.Item
                          {...restField}
                          name={[name, "price"]}
                          rules={[
                            { required: true, message: "Missing last name" }
                          ]}
                          className="mb-0"
                        >
                          <Input />
                        </Form.Item>
                      </div>

                      <div className="w-[25px] h-[25px] bg-[red] flex justify-center items-center rounded-[25px] cursor-pointer mt-[24px]">
                        <Icon
                          icon="mdi:trash-outline"
                          color="white"
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      </div>
                    </Space>

                    <p className="text-[#ccc]">
                      重量在(1kg~3kg)范围内,<span>每1kg</span>加价1元
                    </p>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => {
                      add();
                    }}
                    icon={<PlusOutlined />}
                  >
                    添加重量规则
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <div>时段规则</div>
          <Form.List name={["ruleContext", "time"]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key}>
                    <Space
                      align="baseline"
                      className=" flex items-center mt-[10px]"
                    >
                      <div>
                        <div>范围:</div>
                        <div className="flex items-center">
                          <Form.Item
                            {...restField}
                            name={[name, "gt"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                          <span>~</span>
                          <Form.Item
                            {...restField}
                            name={[name, "lte"]}
                            rules={[
                              {
                                required: true,
                                message: "Missing first name"
                              }
                            ]}
                            className="mb-0"
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </div>

                      <div>
                        <div>价格(元):</div>
                        <Form.Item
                          {...restField}
                          name={[name, "price"]}
                          rules={[
                            { required: true, message: "Missing last name" }
                          ]}
                          className="mb-0"
                        >
                          <Input />
                        </Form.Item>
                      </div>

                      <div className="w-[25px] h-[25px] bg-[red] flex justify-center items-center rounded-[25px] cursor-pointer mt-[24px]">
                        <Icon
                          icon="mdi:trash-outline"
                          color="white"
                          onClick={() => {
                            remove(name);
                          }}
                        />
                      </div>
                    </Space>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type="default"
                    onClick={() => {
                      add();
                    }}
                    icon={<PlusOutlined />}
                    className="my-[10px]"
                  >
                    添加时间段
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Edit;
