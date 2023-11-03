import ReactECharts from "echarts-for-react";
export default function Echart() {
  const option = {
    title: {
      text: ""
    },
    tooltip: {
      trigger: "axis"
    },
    // 图例属性
    legend: {
      data: [
        "cancel",
        "close",
        "complete",
        "sending",
        "waitConfirm",
        "waitPay",
        "waitReceive"
      ],
      orient: "horizontal", // 设置图例为水平方向
      left: "center" // 设置图例居左对齐
      // bottom: "20px" // 设置图例距离底部的距离
    },
    // 图标网格大小
    grid: {
      left: "2%",
      right: "7%",
      bottom: "0%",
      top: "10%",
      containLabel: true
    },
    // 图表工具箱的属性
    toolbox: {
      feature: {}
    },
    // x轴
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: [10, 20, 30],
      axisLine: {
        lineStyle: {
          color: "rgb(154,154,154)" // 这里是你想要的轴线颜色
        }
      },
      axisLabel: {
        color: "rgb(154,154,154)" // 这里是你想要的轴标签颜色
      }
    },
    // y轴
    yAxis: {
      type: "value",
      interval: 25,
      min: 0,
      max: 100,
      show: false
    },
    series: [
      {
        // name: "waitPay",
        type: "line",
        data: [10, 20, 30]
      },
      {
        // name: "waitReceive",
        type: "line",
        data: [10, 20, 30]
      },
      {
        // name: "waitConfirm",
        type: "line",
        data: [10, 20, 30]
      },
      {
        // name: "waitConfirm",
        type: "line",
        data: [10, 20, 30]
      },
      {
        // name: "waitConfirm",
        type: "line",
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
        className=" mt-[20px]"
      >
        <div style={{ fontSize: "20px", color: "#999" }}>订单数据曲线</div>
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
