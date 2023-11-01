import { useEffect, type FC, useState } from "react";
import { Button, InputNumber, message } from "antd";
import { configintegral, postconfigintegral } from "@/service/api";
import { useRequest } from "ahooks";
// 积分设置

const Integral: FC = () => {
  const [va1, setva1] = useState("");
  useEffect(() => {
    configintegral()
      .then((res) => {
        setva1(String(res.data.data.withIntegral));
      })
      .catch((error) => error);
  }, []);
  const { run: onintegral } = useRequest(
    async () =>
      await postconfigintegral({
        withIntegral: va1
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" w-[75%] absolute top-[10px] left-[20px]">
        <span className=" text-[20px] pr-[12px]">
          <strong>积分设置</strong>
        </span>
      </div>
      <div className=" w-[75%] absolute top-[70px] left-[45px] text-[14px]">
        <span>积分抵扣比例:</span>
        <br />
        <InputNumber
          onChange={() => onchange}
          className=" w-[500px] mt-[10px]"
          value={va1}
          // defaultValue={va1}
        />
        <p className=" text-gray-400 text-[12px]">
          输入1000&nbsp;则表示1000积分可以抵扣1元,输入100表示100积分可以抵扣一元
        </p>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => {
            onintegral();
            return message.info("保存成功");
          }}
          type="primary"
          className=" mt-[40px] h-[40px]"
        >
          点击保存
        </Button>
      </div>
    </div>
  );
};

export default Integral;
