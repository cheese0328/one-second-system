import { useEffect, type FC, useState } from "react";
import Input from "antd/es/input/Input";
// 分享设置

import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { useRequest } from "ahooks";
import { configshare, postconfigshare } from "@/service/api";

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text"
  },
  maxCount: 1,
  onChange(info) {
    if (info.file.status !== "uploading") {
      // eslint-disable-next-line no-console
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      void message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      void message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const App: React.FC = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />} className=" w-[200px] h-[200px]">
      上传图片
    </Button>
  </Upload>
);

const Share: FC = () => {
  const [va1, setva1] = useState("");
  const [va2, setva2] = useState("");
  const [va3, setva3] = useState("");
  useEffect(() => {
    configshare()
      .then((res) => {
        setva1(res.data.data.title);
        setva2(res.data.data.desc);
        setva3(res.data.data.path);
      })
      .catch((error) => error);
  }, []);
  const { run: onshare } = useRequest(
    async () =>
      await postconfigshare({
        title: va1,
        desc: va2,
        path: va3
      }),
    {
      manual: true
    }
  );
  return (
    <div className=" relative">
      <div className=" w-[75%] absolute top-[10px] left-[20px]">
        <span className=" text-[20px] pr-[12px]">
          <strong>分享设置</strong>
        </span>
      </div>
      <div className=" w-[75%] absolute top-[20px] left-[45px] text-[14px]">
        <div className=" mt-[40px]">
          <span>分享标题:</span>
          <br />
          <Input
            placeholder="请输入分享标题"
            className=" w-[500px] mt-[10px]"
            // defaultValue={va1}
            value={va1}
          />
        </div>
        <div className=" mt-[40px]">
          <span>自定义分享描述:</span>
          <br />
          <Input
            placeholder="请输入自定义分享描述"
            className=" w-[500px] mt-[10px]"
            // defaultValue={va2}
            value={va2}
          />
        </div>
        <div className=" mt-[40px]">
          <span>页面path:</span>
          <br />
          <Input
            placeholder="请输入页面path"
            className=" w-[500px] mt-[10px]"
            // defaultValue={va3}
            value={va3}
          />
          <p className=" text-gray-400 text-[12px]">
            页面path,必须是以/开头的完整路径
          </p>
        </div>
        <div className=" mt-[40px]">
          <span>分享图标:</span>
          <br />
          <App />
          <p className=" text-gray-400 text-[12px]">上传格式:jpg,jpeg,png</p>
          <p className=" text-gray-400 text-[12px]">最大限制2MB</p>
          <p className=" text-gray-400 text-[12px] mt-[20px]">
            路径可以是本地文件路径、代码包文件路径或者网络图片路径。显示图片长宽比是5:4
          </p>
        </div>
        <Button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => {
            onshare();
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

export default Share;
