import ReactECharts from "echarts-for-react";
export default function Echart() {
  const option = {
    title: {
      text: ""
    },
    tooltip: {
      trigger: "axis"
    },
    grid: {
      left: "2%",
      right: "7%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    toolbox: {
      feature: {}
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: [2021 - 9 - 23, 2023 - 10 - 30]
    },
    yAxis: {
      type: "value",
      interval: 25,
      min: 0,
      max: 100
    },
    series: [
      {
        type: "line",
        stack: "Total",
        color: "rgb(47,194,91)",
        data: [10, 20, 30]
      },
      {
        type: "line",
        stack: "Total",
        color: "rgb(24,144,255)",
        data: [10, 20, 30]
      }
    ]
  };

  return (
    <>
      <div
        style={{
          borderRadius: "4px",
          boxShadow: "0 0 5px 2px rgba(0,0,0,0.05)",
          padding: "20px"
        }}
        className=" mt-[20px] w-[50%]"
      >
        <div style={{ fontSize: "20px", color: "#999" }}>用户数据曲线</div>
        <div className=" mt-[12px] item-center flex-start felx">
          <div>按时间查询：</div>
          <span></span>
        </div>
        <ReactECharts
          option={option}
          className="!w-[100%]  !h-[calc(100%-82px)]"
        />
      </div>
    </>
  );
}
