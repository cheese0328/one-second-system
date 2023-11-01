import { Button, Radio, message, type RadioChangeEvent } from "antd";
import { useState, type FC, useEffect } from "react";
import { configcash, postconfigcash } from "@/service/api";
import { useRequest } from "ahooks";
// 提现设置

// const MyComponent = () => {
//   useMount(() => {
//     // eslint-disable-next-line no-console, @typescript-eslint/no-floating-promises
//     message.info("保存成功");
//   });
//   return <div></div>;
// };

// const Jieliu = () => {
//   const [state, { toggle }] = useToggle(false);
//   const { run } = useThrottleFn(
//     () => {
//       // eslint-disable-next-line no-console
//       console.log(state);
//       toggle();
//       setTimeout(() => {
//         toggle();
//       }, 3000);
//     },
//     { wait: 3000 }
//   );
//   return (
//     <div>
//       <Button
//         onClick={run}
//         className=" bg-purple-400 mt-[40px] h-[40px] text-[white]"
//       >
//         点击保存
//       </Button>
//       {state && <MyComponent />}
//     </div>
//   );
// };

const Cash: FC = () => {
  const [value1, setvalue1] = useState(true);
  const [value2, setvalue2] = useState(true);
  useEffect(() => {
    configcash()
      .then((res) => {
        setvalue1(res.data.data.newUserOpen);
        setvalue2(res.data.data.shareOpen);
      })
      .catch((error) => error);
  }, []);

  const { run: onzzy } = useRequest(
    async () =>
      await postconfigcash({
        newUserOpen: value1,
        shareOpen: value2,
        newUserRules: [
          {
            couponNo: "",
            probability: 1
          }
        ],
        shareUserRules: [
          {
            couponNo: "",
            probability: 1
          }
        ]
      }),
    {
      manual: true
    }
  );

  const onChange1 = (e: RadioChangeEvent) => {
    setvalue1(e.target.value);
  };
  const onChange2 = (e: RadioChangeEvent) => {
    setvalue2(e.target.value);
  };
  return (
    <div className=" relative">
      <div className=" w-[75%] absolute top-[10px] left-[20px]">
        <span className=" text-[20px] pr-[12px]">
          <strong>分享设置</strong>
        </span>
      </div>
      <div className=" absolute top-[80px] left-[30px]">
        <span>是否开启此功能</span>
        <br />
        <br />
        <Radio.Group onChange={onChange1} value={value1}>
          <Radio value={true}>开启</Radio>
          <Radio value={false}>关闭</Radio>
        </Radio.Group>
        <br />
        <br />
        <span>是否开启此功能</span>
        <br />
        <br />
        <Radio.Group onChange={onChange2} value={value2}>
          <Radio value={true}>开启</Radio>
          <Radio value={false}>关闭</Radio>
        </Radio.Group>
        <br />
        <br />
        <Button
          type="primary"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => {
            onzzy();
            return message.info("保存成功");
          }}
        >
          保存
        </Button>
      </div>
    </div>
  );
};

export default Cash;
