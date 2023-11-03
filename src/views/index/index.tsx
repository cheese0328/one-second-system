import { type FC } from "react";
import Echart from "./Echart";
import Echart2 from "./Echart2";
import { Icon } from "@iconify/react";
import { useRequest } from "ahooks";
import { getGobelList } from "../../service/api";

const Index: FC = () => {
  const { data } = useRequest(getGobelList);
  // console.log(data?.data.data);

  return (
    <>
      {/* 数据总览标题 */}
      <div style={{ fontSize: "24px", fontWeight: "500" }}>数据总览</div>
      {/* 数据展示 */}
      <div className="mt-[60px]">
        <div className="ml-[-10px] mr-[-10px] flex">
          <div className="pl-[10px] pr-[10px] block w-[25%]">
            <div
              className=" w-[100%] h-[100px] flex relative"
              style={{
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
                borderRadius: "4px",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <div className=" w-[60px] ml-[20px] text-center ">
                <div
                  className=" w-[60px] h-[60px] text-center absolute top-[-32px]"
                  style={{
                    borderRadius: "4px",
                    backgroundColor: "#F09823"
                  }}
                >
                  <div>
                    <Icon
                      icon="ph:user-fill"
                      color="white"
                      fontSize="30px"
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                  <div
                    className="text-[12px] mt-[20px]"
                    style={{ color: "#999" }}
                  >
                    昨日新增
                  </div>
                  <div className="text-[12px] " style={{ color: "#666" }}>
                    {data?.data.data.yesterdayUserTotal}人
                  </div>
                </div>
              </div>
              {/* 总用户数 */}
              <div className=" ml-[40px] block">
                <div className="text-[14px] text-[#333]">总用户数</div>
                <div className="text-[24px] text-[#333]">
                  {data?.data.data.userTotal}
                  <span className="text-[12px]">人</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[10px] pr-[10px] block w-[25%]">
            <div
              className=" w-[100%] h-[100px] flex relative"
              style={{
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
                borderRadius: "4px",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <div className=" w-[60px] ml-[20px] text-center ">
                <div
                  className=" w-[60px] h-[60px] text-center absolute top-[-32px]"
                  style={{
                    borderRadius: "4px",
                    background: "#fff",
                    backgroundColor: "#4294F4"
                  }}
                >
                  <div>
                    <Icon
                      icon="healthicons:money-bag"
                      color="white"
                      fontSize="30px"
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                  <div
                    className="text-[12px] mt-[20px]"
                    style={{ color: "#999" }}
                  >
                    昨日新增
                  </div>
                  <div className="text-[12px] " style={{ color: "#666" }}>
                    {data?.data.data.yesterdayOrderCompleteTotal}元
                  </div>
                </div>
              </div>
              {/* 总用户数 */}
              <div className=" ml-[40px] block">
                <div className="text-[14px] text-[#333]">总盈利</div>
                <div className="text-[24px] text-[#333]">
                  {data?.data.data.orderCompleteTotal}
                  <span className="text-[12px]">元</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[10px] pr-[10px] block w-[25%]">
            <div
              className=" w-[100%] h-[100px] flex relative"
              style={{
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
                borderRadius: "4px",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <div className=" w-[60px] ml-[20px] text-center ">
                <div
                  className=" w-[60px] h-[60px] text-center absolute top-[-32px]"
                  style={{
                    borderRadius: "4px",
                    background: "#fff",
                    backgroundColor: "#50CADE"
                  }}
                >
                  <div>
                    <Icon
                      icon="fluent:book-default-28-filled"
                      color="white"
                      fontSize="30px"
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                  <div
                    className="text-[12px] mt-[20px]"
                    style={{ color: "#999" }}
                  >
                    昨日新增
                  </div>
                  <div className="text-[12px] " style={{ color: "#666" }}>
                    {data?.data.data.yesterdayTradeTotal}元
                  </div>
                </div>
              </div>
              {/* 总用户数 */}
              <div className=" ml-[40px] block">
                <div className="text-[14px] text-[#333]">总交易额</div>
                <div className="text-[24px] text-[#333]">
                  {data?.data.data.tradeTotal}
                  <span className="text-[12px]">元</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-[10px] pr-[10px] block w-[25%]">
            <div
              className=" w-[100%] h-[100px] flex relative"
              style={{
                boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
                borderRadius: "4px",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <div className=" w-[60px] ml-[20px] text-center ">
                <div
                  className=" w-[60px] h-[60px] text-center absolute top-[-32px]"
                  style={{
                    borderRadius: "4px",
                    background: "#fff",
                    backgroundColor: "#4BD362"
                  }}
                >
                  <div>
                    <Icon
                      icon="material-symbols:order-approve-rounded"
                      color="white"
                      fontSize="30px"
                      style={{ marginTop: "15px" }}
                    />
                  </div>
                  <div
                    className="text-[12px] mt-[20px]"
                    style={{ color: "#999" }}
                  >
                    昨日新增
                  </div>
                  <div className="text-[12px] " style={{ color: "#666" }}>
                    {data?.data.data.yesterdayOrderCompleteTotal}个
                  </div>
                </div>
              </div>
              {/* 总用户数 */}
              <div className=" ml-[40px] block">
                <div className="text-[14px] text-[#333]">订单完成量</div>
                <div className="text-[24px] text-[#333]">
                  {data?.data.data.orderCompleteTotal}
                  <span className="text-[12px]">个</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Echart />
        <div
          style={{
            borderRadius: "4px",
            boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
            padding: "20px"
          }}
          className=" mt-[20px] w-[50%]"
        >
          <div style={{ fontSize: "20px", color: "#999" }}>订单数据</div>
          <div className=" mt-[12px] item-center flex-start felx">
            <div>按时间查询：</div>
            {/* <span>日历</span> */}
          </div>
          <div className="flex flex-between flex-wrap">
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(0, 204, 102)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(255, 51, 0)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="icon-park-solid:transaction-order"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(255, 102, 102)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(255, 102, 51)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(0, 153, 255)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(170, 170, 170)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(51, 51, 51)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
            <div
              className=" flex flex-center item-center h-[125px] w-[50%]"
              style={{ justifyContent: "center" }}
            >
              <div className="text-center">
                <div
                  className=" w-[30px] h-[30px] text-center"
                  style={{
                    backgroundColor: "rgb(255, 102, 153)",
                    borderRadius: "0 8px 0 8px",
                    margin: "auto"
                  }}
                >
                  <Icon
                    icon="fluent:book-default-28-filled"
                    color="white"
                    fontSize="15px"
                    style={{ marginTop: "7px" }}
                  />
                  {/* 11 */}
                  <div
                    style={{
                      fontSize: "14px",
                      lineHeight: "30px",
                      color: "#fff"
                    }}
                  >
                    {" "}
                  </div>
                </div>
                <div
                  className=" mt-[8px]"
                  style={{ fontSize: "12px", color: "#999" }}
                >
                  已完成
                </div>
                <div className="fo-[18px]">0个</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Echart2 />
    </>
  );
};

export default Index;
