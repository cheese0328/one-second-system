import { useMount, useThrottleFn, useToggle } from "ahooks";
import { Button, Dropdown, Input, message, type MenuProps, Table } from "antd";
import { Fragment, type FC } from "react";
// 提现列表

const MyComponent = () => {
  useMount(() => {
    // eslint-disable-next-line no-console, @typescript-eslint/no-floating-promises
    message.info("查询失败");
  });
  return <div></div>;
};

const Jieliu = () => {
  const [state, { toggle }] = useToggle(false);
  const { run } = useThrottleFn(
    () => {
      // eslint-disable-next-line no-console
      console.log(state);
      toggle();
      setTimeout(() => {
        toggle();
      }, 3000);
    },
    { wait: 3000 }
  );
  return (
    <div>
      <Button onClick={run} className=" bg-purple-400">
        查询
      </Button>
      {state && <MyComponent />}
    </div>
  );
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "第一个选项"
  },
  {
    key: "2",
    label: "第二个选项"
  },
  {
    key: "3",
    label: "第三个选项"
  },
  {
    key: "4",
    label: "第四个选项"
  }
];

const Cash: FC = () => {
  return (
    <div className=" relative">
      <div className=" absolute top-[5px] left-[10px]">
        <span className=" text-[24px] pr-[12px]">提现列表</span>
      </div>
      <div className=" absolute top-[60px] left-[10px] flex w-[1000px] justify-around">
        <Fragment>
          <Input
            placeholder="开户行"
            className=" w-[180px] h-[40px]"
            style={{ width: 200, marginRight: 20 }}
            id="i"
          />
          <Input
            placeholder="银行卡号"
            className=" w-[180px] h-[40px]"
            style={{ width: 200, marginRight: 20 }}
            id="i"
          />
          <Input
            placeholder="真实姓名"
            className=" w-[180px] h-[40px]"
            style={{ width: 200, marginRight: 20 }}
            id="i"
          />
          <Input
            placeholder="提现编号"
            className=" w-[180px] h-[40px]"
            style={{ width: 200, marginRight: 20 }}
            id="i"
          />
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow
            className=" w-[180px] h-[40px]"
          >
            <Button>状态选择</Button>
          </Dropdown>
        </Fragment>
        <br />
        <div className=" absolute top-[60px] left-0 flex justify-between">
          <Button>取消</Button>
          <Jieliu />
        </div>
        <div className=" absolute top-[130px] left-0 w-[100%]">
          <hr />
          <Table className=" w-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Cash;
