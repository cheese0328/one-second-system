// 小程序设置
import type React from "react";
import { Tabs, Input, Button, message } from "antd";
import type { TabsProps } from "antd";
import { useRequest } from "ahooks";
import { type FC, useEffect, useState } from "react";
import {
  configAPP1,
  configAPP2,
  configAPP3,
  configAPP4,
  configAPP5,
  postconfigAPP1,
  postconfigAPP2,
  postconfigAPP3,
  postconfigAPP4,
  postconfigAPP5
} from "@/service/api";
// import { Icon } from "@iconify/react";

const onChange = (key: string) => {
  // eslint-disable-next-line no-console
  console.log(key);
};
const Children1: FC = () => {
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");
  const [value4, setvalue4] = useState("");
  const [value5, setvalue5] = useState("");
  const [value6, setvalue6] = useState("");
  useEffect(() => {
    configAPP1()
      .then((res) => {
        setvalue1(res.data.data.wxAppId);
        setvalue2(res.data.data.wxAppSecret);
        setvalue3(res.data.data.qqAppid);
        setvalue4(res.data.data.qqAppSecret);
        setvalue5(res.data.data.ttAppid);
        setvalue6(res.data.data.ttAppSecret);
      })
      .catch((error) => error);
  }, []);
  const { run: onapp1 } = useRequest(
    async () =>
      await postconfigAPP1({
        wxAppId: value1,
        wxAppSecret: value2,
        qqAppid: value3,
        qqAppSecret: value4,
        ttAppid: value5,
        ttAppSecret: value6
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>微信小程序配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>小程序ID:</span>
        <br />
        <Input
          placeholder="请输入小程序ID"
          className=" w-[500px]"
          value={value1}
        />
      </div>
      <div className=" mt-[40px]">
        <span>小程序密钥:</span>
        <br />
        <Input
          placeholder="请输入小程序密钥"
          className=" w-[500px] mt-[10px]"
          value={value2}
        />
      </div>
      <hr className=" mt-[40px]" />
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>QQ小程序配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>小程序ID:</span>
        <br />
        <Input
          placeholder="请输入小程序ID"
          className=" w-[500px]"
          value={value3}
        />
      </div>
      <div className=" mt-[40px]">
        <span>小程序密钥:</span>
        <br />
        <Input
          placeholder="请输入小程序密钥"
          className=" w-[500px] mt-[10px]"
          value={value4}
        />
      </div>
      <hr className=" mt-[40px]" />
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>字节跳动小程序配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>小程序ID:</span>
        <br />
        <Input
          placeholder="请输入小程序ID"
          className=" w-[500px]"
          value={value5}
        />
      </div>
      <div className=" mt-[40px]">
        <span>小程序密钥:</span>
        <br />
        <Input
          placeholder="请输入小程序密钥"
          className=" w-[500px] mt-[10px]"
          value={value6}
        />
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          onapp1();
          return message.info("保存成功");
        }}
        type="primary"
        className=" mt-[40px] h-[40px]"
      >
        点击保存
      </Button>
    </div>
  );
};

const Children2: FC = () => {
  const [va1, setva1] = useState("");
  const [va2, setva2] = useState("");
  const [va3, setva3] = useState("");
  useEffect(() => {
    configAPP2()
      .then((res) => {
        setva1(res.data.data.wxMchId);
        setva2(res.data.data.wxMchSecert);
        setva3(res.data.data.notifyUrl);
      })
      .catch((error) => error);
  }, []);
  const { run: onapp2 } = useRequest(
    async () =>
      await postconfigAPP2({
        wxMchId: va1,
        wxMchSecert: va2,
        notifyUrl: va3
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>微信商户号配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>微信商户ID:</span>
        <br />
        <Input
          placeholder="请输入微信商户ID"
          className=" w-[500px]"
          value={va1}
        />
      </div>
      <div className=" mt-[40px]">
        <span>微信商户密钥:</span>
        <br />
        <Input
          placeholder="请输入微信商户密钥"
          className=" w-[500px] mt-[10px]"
          value={va2}
        />
      </div>
      <div className=" mt-[40px]">
        <span>回调地址:</span>
        <br />
        <Input
          placeholder="请输入回调地址"
          className=" w-[500px] mt-[10px]"
          value={va3}
        />
        <p className=" text-[12px] text-slate-500">
          输入域名即可,如https://www.landalf.cn
        </p>
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => {
          onapp2();
          return message.info("保存成功");
        }}
        type="primary"
        className=" mt-[40px] h-[40px]"
      >
        点击保存
      </Button>
    </div>
  );
};

const Children3: FC = () => {
  const [va, setva] = useState("");
  useEffect(() => {
    configAPP3()
      .then((res) => {
        setva(res.data.data.mapKey);
      })
      .catch((error) => error);
  }, []);
  const { run: onapp3 } = useRequest(
    async () =>
      await postconfigAPP3({
        mapKey: va
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>地图配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>腾讯地图key:</span>
        <br />
        <Input
          placeholder="请输入腾讯地图key"
          className=" w-[500px]"
          value={va}
        />
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => {
          onapp3();
          return message.info("保存成功");
        }}
        type="primary"
        className=" mt-[40px] h-[40px]"
      >
        点击保存
      </Button>
    </div>
  );
};

const Children4: FC = () => {
  const [va1, setva1] = useState("");
  const [va2, setva2] = useState("");
  const [va3, setva3] = useState("");
  const [va4, setva4] = useState("");
  const [va5, setva5] = useState("");
  const [va6, setva6] = useState("");
  const [va7, setva7] = useState("");
  useEffect(() => {
    configAPP4()
      .then((res) => {
        setva1(res.data.data.accessKeyId);
        setva2(res.data.data.accessKeySecret);
        setva3(res.data.data.arn);
        setva4(res.data.data.ossBucket);
        setva5(res.data.data.ossRegion);
        setva6(res.data.data.smsSignName);
        setva7(res.data.data.smsTemplateCode);
      })
      .catch((error) => error);
  }, []);
  const { run: onapp4 } = useRequest(
    async () =>
      await postconfigAPP4({
        accessKeyId: va1,
        accessKeySecret: va2,
        arn: va3,
        ossBucket: va4,
        ossRegion: va5,
        smsSignName: va6,
        smsTemplateCode: va7
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>阿里云配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>AccessKey ID:</span>
        <br />
        <Input
          placeholder="请输入AccessKey ID"
          className=" w-[500px]"
          value={va1}
        />
      </div>
      <div className=" mt-[40px]">
        <span>密钥Secret:</span>
        <br />
        <Input
          placeholder="请输入密钥Secret"
          className=" w-[500px]"
          value={va2}
        />
      </div>
      <div className=" mt-[40px]">
        <span>ARN:</span>
        <br />
        <Input placeholder="请输入ARN" className=" w-[500px]" value={va3} />
      </div>
      <div className=" mt-[40px]">
        <span>对象存储Oss Region:</span>
        <br />
        <Input
          placeholder="请输入对象存储Oss Region"
          className=" w-[500px]"
          value={va4}
        />
      </div>
      <div className=" mt-[40px]">
        <span>对象存储Oss Bucket:</span>
        <br />
        <Input
          placeholder="请输入对象存储Oss Bucket"
          className=" w-[500px]"
          value={va5}
        />
      </div>
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>阿里云短信验证码</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>签名名称:</span>
        <br />
        <Input
          placeholder="请输入签名名称"
          className=" w-[500px]"
          value={va6}
        />
      </div>
      <div className=" mt-[40px]">
        <span>模版CODE:</span>
        <br />
        <Input
          placeholder="请输入模版CODE"
          className=" w-[500px]"
          value={va7}
        />
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => {
          onapp4();
          return message.info("保存成功");
        }}
        type="primary"
        className=" mt-[40px] h-[40px]"
      >
        点击保存
      </Button>
    </div>
  );
};

const Children5: FC = () => {
  const [va1, setva1] = useState("");
  const [va2, setva2] = useState("");
  const [va3, setva3] = useState("");
  useEffect(() => {
    configAPP5()
      .then((res) => {
        setva1(res.data.data.corpid);
        setva2(res.data.data.corpsecret);
        setva3(res.data.data.verifyChatid);
      })
      .catch((error) => error);
  }, []);
  const { run: onapp5 } = useRequest(
    async () =>
      await postconfigAPP5({
        corpid: va1,
        corpsecret: va2,
        verifyChatid: va3
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" flex items-center content-between text-[14px] text-[#333333] relative top-[20px]">
        <span className=" absolute left-0 ">
          <strong>企业微信配置</strong>
        </span>
        <span className=" absolute right-0 text-[blue]">帮助</span>
      </div>
      <div className=" mt-[40px]">
        <span>企业ID:</span>
        <br />
        <Input
          placeholder="请输入企业ID"
          className=" w-[500px]"
          value={va1}
          // defaultValue={va1}
        />
      </div>
      <div className=" mt-[40px]">
        <span>应用凭证Secret:</span>
        <br />
        <Input
          placeholder="请输入应用凭证Secret"
          className=" w-[500px]"
          value={va2}
          // defaultValue={va2}
        />
      </div>
      <div className=" mt-[40px]">
        <span>群聊id(用于骑手申请通知):</span>
        <br />
        <Input
          placeholder="请输入群聊id"
          className=" w-[500px]"
          value={va3}
          // defaultValue={va3}
        />
      </div>
      <Button
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => {
          onapp5();
          return message.info("保存成功");
        }}
        type="primary"
        className=" mt-[40px] h-[40px]"
      >
        点击保存
      </Button>
      <div className=" mt-[30px]">创建群聊 生成群ID:</div>
      <p className=" text-slate-600 text-[12px]">
        请提交上述配置后,在创建如下配置,并提交群聊
      </p>
      <div className=" flex justify-between">
        <div>
          <span>群名称</span>
          <br />
          <Input placeholder="请输入群名称" className="w-[240px]" />
        </div>
        <div>
          <span>群所有者(userid)</span>
          <br />
          <Input placeholder="请输入群所有者" className=" w-[240px]" />
        </div>
      </div>
      <div className=" flex justify-between mt-[15px]">
        <div>
          <span>群成员1(userid)</span>
          <br />
          <Input placeholder="请输入群成员1" className="w-[140px]" />
        </div>
        <div>
          <span>群成员2(userid)</span>
          <br />
          <Input placeholder="请输入群成员2" className="w-[140px]" />
        </div>
        <div>
          <span>群成员3</span>
          <br />
          <Input placeholder="请输入群成员3" className="w-[140px]" />
        </div>
      </div>
      <Button className="h-[40px] bg-purple-400 mb-[30px] mt-[20px]">
        生成群ID
      </Button>
    </div>
  );
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "开发设置",
    children: <Children1 />
  },
  {
    key: "2",
    label: "支付设置",
    children: <Children2 />
  },
  {
    key: "3",
    label: "地图设置",
    children: <Children3 />
  },
  {
    key: "4",
    label: "阿里云配置",
    children: <Children4 />
  },
  {
    key: "5",
    label: "企业微信配置",
    children: <Children5 />
  }
];

const App: React.FC = () => (
  <div className=" relative">
    <div className=" w-[75%] absolute top-[0px] left-[20px] text-[24px]">
      <span className=" text-[20px] pr-[12px]">小程序设置</span>
    </div>
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      animated={true}
      className=" absolute top-[40px] w-[1000px] items-center"
      centered={true}
      tabBarGutter={150}
    />
  </div>
);

export default App;
